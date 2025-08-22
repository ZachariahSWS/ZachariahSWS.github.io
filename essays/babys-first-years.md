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

Let's imagine twin sisters, Linda and Heather, living in Omaha, Nebraska. In July 2018 they both give birth to their second when they are 27. They both are single mothers and for easier calculations we shall assume that they both make $21,330 (2019's federal poverty line for a family of 3) a year in household income even though Linda actually makes $22,566 and Heather makes $20,865. How much do they consume when you factor in government transfers in cash and in kind? We're going to take the following figures:
- SNAP: $2400 a year
- WIC: $600 a year
- CHIP: $6,300 a year
- Obamacare Subsidies: $8,100 a year
- Nebraska LIHEAP: $500 a year (no help with cooling)
- No section 8/public housing
- Federal EITC: $5,344 a year
- Nebraska EITC: $534 a year
- Child Tax Credit: $2,800 a year

This gives $26,878 in government assistance a year leading to total consumption of $48,208 a year. Note that these figures are going to be significantly higher for 2020 and 2021 and moderately higher thereafter due to Nebraska expanding Medicaid and the enrollment of these children in school. Also note that their New York and Minneapolis/Saint Paul equivalents will be receiving more. On the other hand, the Obamacare subsidies and CHIP are actuarial values rather than individual consumption; healthcare is fat-tailed, so realized benefits accrue to a small proportion of families. Some critics might also say that the amount of healthcare consumed is above the welfare optimum and the individual equilibrium if it were cash. This is fair but [Piper doesn't take that view](https://x.com/KelseyTuoc/status/1958601155271094560).

Now we get to the first study Piper mentions. 

> The team behind[Baby’s First Years](https://pmc.ncbi.nlm.nih.gov/articles/PMC8487960/), one study of a guaranteed income program for new mothers with an emphasis on the effects it would have on mothers and on child development, gave their control group $20 per month and their experimental group $333 per month. They recruited low-income mothers at the hospitals where they gave birth, running the study in Omaha, Nebraska; New York; New Orleans and the Twin Cities. The experimental group had more money (as you would expect) and worked a little less (but it’s probably good if mothers of young babies can cut back on hours slightly). They also[spent slightly more money on stuff for their kids.](https://childandfamilypolicy.duke.edu/wp-content/uploads/2024/06/BFY-Monthly-Cash-Gift-Increases-Families-Investments-in-Young-Children.pdf)

Linda and Heather are stand ins for the low-gift and high-gift groups respectively. Linda was given $240 a year while Heather was given $3,996 a year. If we add that to Linda and Heather's market income plus the common government assistance figures, we get $49,684 for Linda and $51,739 for Heather each year. Heather is only consuming ~4.2% more than Linda is—a tiny signal to tease out wih 517 households in the low-gift group and 374 in the high-gift group. If we ignore government benefits, that is $22,806 for Linda and $24,861 for Heather, or a 9.0% difference in income. We'll be use this 9% figure (standard in the literature) while keeping in mind that household income isn't the same as consumption.

I will focus on proportion of Obese children here as it is the outcome with the best data to compare study effects to expected base rates. I'll use [Chaparro et al 2020](https://pmc.ncbi.nlm.nih.gov/articles/PMC10195234/) which helpfully has data on BMI at age 4. We find the following data (combining "old package" and "new package").
- Very Low Income boys: 24.25% obese at last visit, mean WLZ of 0.47
- Very Low Income girls: 20.22% obese at last visit, mean WLZ of 0.44
- Low Income boys: 23.46% obese at last visit, mean WLZ of 0.46
- Low Income girls: 20.36% obese at last visit, mean WLZ of 0.45
- Above Poverty boys: 22.50% obese at last visit, mean WLZ of 0.39
- Above Poverty girls: 19.13% obese at last visit, mean WLZ of 0.35

Note: this is within the WIC and bins income as <50% of the poverty line for Very Low Income, 50-100% (Low Income) and 100-185% (Above Poverty). It is not perfect, but it's the closest I could find for BMI/Obesity at age 4.

Going from Very Low Income to Above Poverty(around a quadrupleing of household income), obesity for 4-year-old boys goes down by 1.75 percentage points (pp) and for girls by 1.09 pp. If you increase income by 9% sixteen times, you nearly quadruple it (\\(1.09^{16} \approx 3.97\\)). So naively, we'd expect about 0.11pp for boys and 0.07pp for girls per 9% step. In supplement 2 of [the third study Piper links](https://jamanetwork.com/journals/jamapediatrics/fullarticle/2834896), the 95% confidence interval for child obesity is -3.8pp to +6.8pp; for overweight-or-obese it is -7.2pp and +6.2pp.

### Let's do some statistics

In the trial, the low-cash group mean for obesity was 0.184 while the high-cash mean was 0.203, which tracks the Chaparro gradients. For our back-of-the-envelope, assume a base rate \\(p = 0.20\\) for low-income 4-year-olds. Then the number of obese 4-year-olds in a group of size \\(N\\) is \\(X \sim \text{Bin}(N, 0.2)\\) with variance \\(N(0.2)(0.8) = 0.16N\\). Define \\(Y = X/N\\) (the sample proportion). Then \\(\text{Var}(Y) = \text{Var}(X)/N^2 = 0.16/N\\).

Our expected difference is \\(\delta = 0.001\\) (0.1pp). A two-tailed 95% test uses \\(z \approx 1.96\\) (use 2 for simplicity), so we want \\(\delta \approx 2 \cdot \sqrt{\text{Var}(Y)} \implies \tex{Var}(Y) = 2.5 \times 10^{-7}\\). Setting \\(0.16N = 2.5 \times 10^{-7}\} gives that \\(N \approx 640,000\\). Thus in order to detect a difference assuming we take the control group as gospel, we would need 640,000 people receiving $333 a month or $10.2 billion over a 4 year period.  This is not something small random experiments can adjudicate. To get the right order of magnitude, we need natural experiments in welfare policy.

What if we don't want to take \\(p = 0.20\\) as fixed, as this study doesn't? Then use a difference-in-proportions design. Instead of using 9.0% difference in income, we will assume that with the increased sample sizes incomes will converge and the difference in income will be 17.6% (3996 - 240 / the 2019 federal poverty line we used earlier of 21,330). This implies \\(\delta \approx 0.00176\\) (0.176pp) in obesity.

$$SE(\hat p_1 - \hat p_2) = \sqrt{\frac{p(1-p)}{n_1} + \frac{p(1-p)}{n_2}}$$

We will keep the \\(p \approx 0.20\\) but we will be using a new z-score based on 80% power. This is a two sided \\(\alpha = 0.05\\), so we need \\(z_{1-\alpha/2} + z_{1 - \beta} \approx 1.96 + 0.84 = 2.80\\).

$$n_{\text{per group}} \approx 2p(1-p) \left(\frac{2.8}{\delta}\right)^2 = 0.32 \cdot \left(\frac{2.8}{0.00176}\right)^2 \approx 809,917$$

That's ~1.6 million participants total. Program spending would be \\(809,917 \times (333 + 20) \times 48 \approx $13.7 billion\\) over 4 years (both groups paid). You can claw back a bit of power by analyzing both obesity and overweight thresholds, but Duncan et al. adjust for multiple hypothesis testing, keeping you in the same order of magnitude.

All of this is naive, child obesity is probably nonlinear in log consumption (though happiness looks linear in log income) and has confounders like race. But these rough figures are a useful prior on what kind of evidence we need to determine whether UBI improves these health outcomes.


### Conclusion

We see a consistent pattern in scholarship on UBI: the more rigorous high-income-country experiments find nulls, while the rigorous low-income-country experiments find large effects. Why? Income gradients are much smaller in the US than in subsistence-farming contexts. In countries like the US, UBI does not arrive in a safety net vacuum. As calculated earlier, a family of 2 children and a parent in 2019 Nebraska making $21,330 can expect to *consume* roughly twice labor income. Most health improvements are relatively cheap: running water and sewage, vaccinations, micronutrients and a baseline level of calories. 

The health issues we are left with, such as obesity, are less tied to material deprivation and more to preferences (conscious or not; GLP-1 agonists show malleableability) and luck. This doesn't mean that UBI is bad; it means that in high-income settings increasing consumption writ large has lower marginal returns on these outcomes.