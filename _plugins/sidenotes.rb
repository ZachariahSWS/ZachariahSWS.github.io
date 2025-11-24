module Jekyll
  class SidenoteProcessor < Jekyll::Generator
    safe true
    priority :low

    def generate(site)
      # pages
      site.pages.each { |page| process_doc(page) }
      # posts / collections
      site.collections.each_value do |coll|
        coll.docs.each { |doc| process_doc(doc) }
      end
    end

    private

    # Process a single document's content
    def process_doc(doc)
      content = doc.content.dup
      return if content.nil? || content.empty?

      notes = {}
      content = strip_and_collect_defs(content, notes)

      counter = 1
      content.gsub!(/\[\^([^\]]+)\]/) do
        key = Regexp.last_match(1)
        body = notes[key] || ""
        html_for_note(key, body, counter).tap do
          # only increment for numbered ones
          counter += 1 unless key.start_with?("m-")
        end
      end

      doc.content = content
    end

    def strip_and_collect_defs(content, notes)
      lines = content.lines
      kept  = []

      lines.each do |line|
        if line =~ /^\[\^([^\]]+)\]:(.*)$/
          key  = Regexp.last_match(1).strip
          body = Regexp.last_match(2).strip
          notes[key] = body
        else
          kept << line
        end
      end

      kept.join
    end

    def html_for_note(key, body, n)
      if key.start_with?("m-")
        id = "mn-#{key.sub(/^m-/, '')}"
        <<~HTML.strip
          <label for="#{id}" class="margin-toggle"></label>
          <input type="checkbox" id="#{id}" class="margin-toggle" />
          <span class="marginnote">#{body}</span>
        HTML
      else
        id = "sn-#{n}"
        <<~HTML.strip
          <label for="#{id}" class="margin-toggle sidenote-number"></label>
          <input type="checkbox" id="#{id}" class="margin-toggle" />
          <span class="sidenote">#{body}</span>
        HTML
      end
    end
  end
end
