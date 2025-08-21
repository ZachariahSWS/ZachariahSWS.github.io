---
layout: default
title: Contra Baby's First Years
description: Natural Experiments or Bust
permalink: /essays/babys-first-years
toc: false
math: true
image: /images/descartes.jpg
---

[Kelsey Piper at The Argument](https://www.theargumentmag.com/p/giving-people-money-helped-less-than) recently wrote a post summarizing the literature on UBI within the US. The general conclusion we are working to is that UBI studies do not have enough power to detect the changes in health outcomes. They need hundreds of thousands of participants and billions of dollars to detect changes in obesity, so not finding a change with a thousand participants should not alter your opinions unless you were expecting extremely unrealistic outcomes.  Fair warning, this article is going to have quite a bit of math.

Let's imagine twin sisters, Linda and Heather, living in Omaha, Nebraska. In July 2018 they both give birth to their second when they are 27. They both are single mothers and for easier calculations we shall assume that they both make $21,330 (the 2019 federal poverty line for a family of 3) a year in household income even though Linda actually makes $22,566 and Heather makes $20,865. How much do they consume when you factor in government transfers in cash and in kind? We're going to take the following figures:
- SNAP: $2400 a year
- WIC: $600 a year
- CHIP: $6,300 a year
- Obamacare Subsidies: $8,100 a year
- Nebraska LIHEAP: $500 a year (no help with cooling)
- No section 8/public housing
- Federal EITC: $5,344 a year
- Nebraska EITC: $534 a year
- Child Tax Credit: $2,800 a year

This gives $26,878 in government assistance a year leading to total consumption of $48,208 a year. Note that these figures are going to be significantly higher for 2020 and 2021 and moderately higher thereafter due to Nebraska expanding Medicaid and the enrollment of these children in school. Also note that their New York and Minneapolis/Saint Paul equivalents will be receiving more. On the other hand, the Obamacare subsidies and CHIP are actuarial values rather than individual consumption. Healthcare is fat tailed so the realized benefits are only accruing to a small proportion of families. Some critics might also say that the amount of healthcare consumed is above the welfare optimum and the individual equilibrium if it was cash. This is fair but [Piper doesn't believe this](https://x.com/KelseyTuoc/status/1958601155271094560).

Now we get to the first study Piper mentions. 

> The team behind[Baby’s First Years](https://pmc.ncbi.nlm.nih.gov/articles/PMC8487960/), one study of a guaranteed income program for new mothers with an emphasis on the effects it would have on mothers and on child development, gave their control group $20 per month and their experimental group $333 per month. They recruited low-income mothers at the hospitals where they gave birth, running the study in Omaha, Nebraska; New York; New Orleans and the Twin Cities. The experimental group had more money (as you would expect) and worked a little less (but it’s probably good if mothers of young babies can cut back on hours slightly). They also[spent slightly more money on stuff for their kids.](https://childandfamilypolicy.duke.edu/wp-content/uploads/2024/06/BFY-Monthly-Cash-Gift-Increases-Families-Investments-in-Young-Children.pdf)

Linda and Heather are stand ins for the Low gift and High gift groups respectively. Linda was given $240 a year while Heather was given $3,996 a year. If we add that to Linda and Heather's actual income plus the common government assistance figures we get $49,684 for Linda and $51,739 for Heather each year. Heather is only consuming 4.1% more than Linda is, this is a tiny amount to tease out differences if there are 517 households in the low cash group and 374 in the high cash group. If we ignore government benefits, that is $22,806 for Linda and $24,861 for Heather, or a 9.0% difference in income. We'll be using the 9% figure as that is the standard in this section of academia but keep in the back of your mind that household income isn't the same as consumption.

I will focus on BMI percentile here as it is the one with the best data to compare the study to expected base rates. I will be looking at [Chaparro et al 2020](https://pmc.ncbi.nlm.nih.gov/articles/PMC10195234/) which helpfully has data on 4 year old BMI. We find the following data (I'm combining old package and new package).
Very Low Income Boys: 24.25% obese at last visit, mean WLZ of 0.47
Very Low Income Girls: 20.22% obese at last visit, mean WLZ of 0.44
Low Income Boys: 23.46% obese at last visit, mean WLZ of 0.46
Low Income Girls: 20.36% obese at last visit, mean WLZ of 0.45
Above Poverty Boys: 22.50% obese at last visit, mean WLZ of 0.39
Above Poverty Girls: 19.13% obese at last visit, mean WLZ of 0.35

Note that this data is within the WIC and goes from <50% of the poverty line for Very Low Income, 50-100% for Low Income and 100-185% for above poverty. This does not give us perfect data, but it is the closest I could find for BMI/Obesity at 4 years old.

As we ~quadruple household income and 4 year old boy obesity goes down by 1.75 percentage points and 4 year old girl obesity goes down by 1.09 percentage points. This is a rough increase from very low income to above poverty, remember the welfare calculations we made earlier, this is probably an overestimate of consumption changes. If you increase income by 9% 16 times in a row you get a quadrupling so naively we would expect a 0.11pp difference for male children and a 0.07pp difference for female children. In supplement 2 of [the third study Piper links on this trial](https://jamanetwork.com/journals/jamapediatrics/fullarticle/2834896)  we see that the 95% confidence interval for child obesity is -0.038 to 0.068 or reducing obesity by 3.8pp to increasing it by 6.8pp. For overweight to obese it is -7.2pp and 6.2pp.

### Let's do some statistics

We can see that the low cash group mean for obesity was 0.184 while the high cash mean was 0.203 which lines up with our Chaparro et al 2020. For the sake of our calculations assume a 0.200 base rate for low income 4-year-olds. We can thus model the number of obese 4-year-olds as a Binomial random variable $X \sim \text{Bin}(N, 0.2)$ with variance $N(0.2)(0.8) = 0.16N$.  We define a new random variable Y which is equal to X/N as we are looking at percentages here. We thus have that the variance of Y is the variance of X over N squared of 0.16/N.

Our expected difference is 0.001 (0.1pp) and the paper uses 2 tailed 95% confidence interval which is a Z-score of around 1.96 (we'll use 2 for simpler numbers). This gives us a standard deviation of 0.0005 and a variance of 0.00000025. Plugging this in gives us $0.00000025N = 0.16$ or N = 640,000. Thus in order to detect a difference assuming we take the control group as gospel, we would need over six hundred thousand people receiving $333 a month or $10 billion over a 4 year period.  This is not something random experiments can weigh in on. In order to get anything resembling the right order of magnitude we need to be on the lookout for natural experiments in welfare policy.

But what if we don't want to take the 0.2 figure as gospel, as this study doesn't? Well then we'll use a difference of proportions. However, instead of using 9.0% difference in income, we will assume that with the increased sample sizes incomes will converge and the difference in income will be 17.6% (3996 - 240 / the 2019 federal poverty line we used earlier of 21330). This gives us a 0.176pp change in obesity expected.

$$SE(\hat p_1 - \hat p_2) = \sqrt{\frac{p(1-p)}{n_1} + \frac{p(1-p)}{n_2}}$$
We will keep the $p \approx 0.20$ but we will be using a new z-score based on 80% power. This is a two sided $\alpha = 0.05$, so we need $z_{1-\alpha/2} + z_{1 - \beta} \approx 1.96 + 0.84 = 2.80$.
$$n_{\text{per group}} \approx 2p(1-p) \left(\frac{2.8}{\delta}\right)^2 = 0.32 \cdot \left(\frac{2.8}{0.00176}\right)^2 \approx 809,917$$
This means we would need a total of 1.6 million participants, but spending would be $13.7 billion (809917 * (333 + 20) * 48) over 4 years. The simplifying assumptions earlier mostly canceled out leaving us with roughly the same cost and similar implications for what kind of data is needed. We can get more power by including data on obesity and overweight thresholds but Duncan et al adjusts for multiple hypothesis testing which will also leave us in the same order of magnitude.

All of this is naive, child obesity is probably non linear with respect to log consumption (though literature on happiness shows that it is linear) and has confounders like race. However, these rough figures provide a good prior for what kind of evidence we need to determine whether UBI is a good idea.


### Conclusion

We see a pretty consistent pattern in scholarship on UBI: the more rigorous high income country experiments find nulls while the rigorous low income country experiments find large effects. What explains this? Income gradients are much smaller in the US than in subsistence farming communities. In countries like the US, UBI is not being implemented in the absence of a social safety net.  As we calculated earlier, a family of 2 children and a parent in 2019 Nebraska making $21,330 can expect to consume twice as much as they make in labor income. Most health improvements are relatively cheap: running water and working sewage systems, vaccinations, access to certain vitamins and receiving a baseline level of calories such that you are not starving. 

The health issues we are left with such as obesity are much less tied to material deprivation as much as personal preferences (conscious or unconscious, GLP-1 agonists show that they are malleable) and luck of the draw. This doesn't mean that UBI is bad, but that increasing consumption writ large does not have as high of returns.
