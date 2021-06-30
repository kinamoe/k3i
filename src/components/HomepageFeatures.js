import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'What\'s New',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
<ul class="whatsnew">
      
      <li class="item mb-1 whatsnew">
        <a href="https://catalog.caida.org/details/media/2021_thoughts_from_data_trenches_nsf" title="Slideset &quot;Thoughts from the Data Trenches&quot; presented at NSF Making the Leap to Large.">"Thoughts from the Data Trenches" (NSF) slideset</a>
      </li>

      <li class="item mb-1 whatsnew">
        <a href="/workshops/wombir/2104/" title="On April 15-16 and April 20, 2021, we will host the 2nd NSF-funded Workshop on Overcoming Measurement Barriers to Internet Research (WOMBIR-2) online via a closed-session teleconference. The workshop is open to the public, but advanced registration is required. The session will not be recorded for public rebroadcast.">WOMBIR-2: 2nd NSF Workshop on Overcoming Measurement Barriers to Internet Research</a>
      </li>

      <li class="item mb-1 whatsnew">
        <a href="https://catalog.caida.org/details/media/2020_trufflehunter_imc" title="This slideset was presented at: ACM Internet Measurement Conference (IMC) (October 2020)
">"Trufflehunter: Cache Snooping Rare Domains at Large Public DNS Resolvers" (IMC) slideset
</a>
      </li>

      <li class="item mb-1 whatsnew">
        <a href="https://catalog.caida.org/details/media/2020_dynamips_conext" title="This slideset was presented at: ACM SIGCOMM Conference on emerging Networking EXperiments and Technologies (CoNEXT) (December 2020)
">"DynamIPs: Analyzing address assignment practices in IPv4 and IPv6" (CoNEXT) slideset
</a>
      </li>

      <li class="item mb-1 whatsnew">
        <a href="https://catalog.caida.org/details/media/2020_measuring_impact_covid_19_cloud_iab" title="This slideset was presented at: COVID-19 Network Impacts Workshop (November 2020)
">"Measuring the impact of COVID-19 on cloud network performance" (IAB) slideset
</a>
      </li>

      <li class="item mb-1 whatsnew">
        <a href="https://catalog.caida.org/details/media/2020_learning_extract_use_asns_imc" title="This slideset was presented at: ACM Internet Measurement Conference (IMC) (October 2020)
">"Learning to Extract and Use ASNs in Hostnames" (IMC) slideset
</a>
      </li>
</ul>
    ),
  },
  {
    title: 'Papers',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
<ul class="whatsnew">
      
      <li class="item mb-1 papers">
        <a href="https://catalog.caida.org/details/paper/2021_wie2020_report" title="k. claffy and D. Clark, &quot;Workshop on Internet Economics (WIE 2020) Final Report&quot;, Apr 2021.">Workshop on Internet Economics (WIE 2020) Final Report</a>

      </li>

      <li class="item mb-1 papers">
        <a href="https://catalog.caida.org/details/paper/2021_impact_general_data_protection" title="R. Zhuo, B. Huffaker, k. claffy, and S. Greenstein, &quot;The impact of the General Data Protection Regulation on internet interconnection'', Telecommunications Policy, vol. 45, no. 2, Mar 2021.">The impact of the General Data Protection Regulation on internet interconnection</a>

      </li>

      <li class="item mb-1 papers">
        <a href="https://catalog.caida.org/details/paper/2021_ssr2_review_team_final" title="A. Aina, N. Ameen, K. Barrett, k. claffy, R. Housley, Ž. Kecić, B. Krsic, J. Matogoro, S. McCormick, D. Mitchel, E. Osterweil, R. Pariyar, N. Ritchie, and L. Weissinger, &quot;Second Security, Stability, and Resiliency (SSR2) Review Team Final Report&quot;, Tech. rep., ICANN Security, Stability, and Resiliency (SSR2), Jan 2021.">Second Security, Stability, and Resiliency (SSR2) Review Team Final Report</a>

      </li>

      <li class="item mb-1 papers">
        <a href="https://catalog.caida.org/details/paper/2021_trust_zones/" title="D. Clark and k. claffy, &quot;Trust Zones: A Path to a More Secure Internet Infrastructure&quot;, Tech. rep., Center for Applied Internet Data Analysis (CAIDA), Dec 2020.">Trust Zones: A Path to a More Secure Internet Infrastructure</a>

      </li>

      <li class="item mb-1 papers">
        <a href="https://catalog.caida.org/details/paper/2020_aspath_prepending/" title="P. Marcos, L. Prehn, L. Leal, A. Dainotti, A. Feldmann, and M. Barcellos, &quot;AS-Path Prepending: there is no rose without a thorn&quot;, in ACM Internet Measurement Conference (IMC), Oct 2020.
">AS-Path Prepending: there is no rose without a thorn
</a>
      </li>

      <li class="item mb-1 papers">
        <a href="https://catalog.caida.org/details/paper/2020_trufflehunter/" title="A. Randall, E. Liu, G. Akiwate, R. Padmanabhan, G. Voelker, S. Savage, and A. Schulman, &quot;Trufflehunter: Cache Snooping Rare Domains at Large Public DNS Resolvers&quot;, in ACM Internet Measurement Conference (IMC), Oct 2020.
">Trufflehunter: Cache Snooping Rare Domains at Large Public DNS Resolvers
</a>
      </li>
</ul>
    ),
  },
  {
    title: 'In The News',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
<ul class="whatsnew">
      
      <li class="item mb-1 inthenews">
        <a href="http://www.circleid.com/posts/20200811-afilias-to-protect-tlds-against-potential-orphan-glue-exploits/" title="Afilias has informed registrars and registry clients that it is taking steps to remove orphan glue records from 200+ TLD zones in its care. This will eliminate the potential for a handful of domain names to be misused.
">DNS: Afilias to Protect TLDs Against Potential "Orphan Glue" Exploits (CircleID)
</a>
      </li>

      <li class="item mb-1 inthenews">
        <a href="https://voxeu.org/article/gdpr-and-internet-interconnection" title="The internet comprises thousands of independently operated networks, where bilaterally negotiated interconnection agreements determine the flow of data between networks. This column examines the impact of the EU's General Data Protection Regulation on the interconnection behaviour of network operators. It finds no measurable effects of GDPR on interconnection topology at the network level, with networks in the EEA growing at a rate similar to networks in non-EEA OECD countries and only economically small effects on the entry and the number of networks.
">Internet Economics: GDPR and internet interconnection (Vox)
</a>
      </li>

      <li class="item mb-1 inthenews">
        <a href="https://www.sdsc.edu/News%20Items/PR20191009_IP_Hijacking.html" title="MIT's CSAIL Lab and CAIDA Identify &quot;Serial Hijackers&quot; of internet IP Addresses
">Security: "Using Machine Learning to Hunt Down Cybercriminals" (SDSC/MIT CSAIL)
</a>
      </li>

      <li class="item mb-1 inthenews">
        <a href="https://www.internethalloffame.org/inductees/kimberly-claffy" title="Pioneering the field of Internet measurement and analysis, Kimberly (&quot;kc&quot;) Claffy has helped the global scientific research community better understand the Internet and how it is used. In addition to conducting her own research, she has developed infrastructure and methodologies for large-scale Internet data collection, analysis and distribution around the world.
">Leadership: KC Claffy inducted into the Internet Hall of Fame (IHOF)
</a>
      </li>

      <li class="item mb-1 inthenews">
        <a href="https://www.britishcouncil.org/anyone-anywhere/explore/dark-side-web/women-kc-claffy" title="Appreciated by some, taken for granted by many, the Internet is understood by few who use it.
The article was written by Darlena Cunha. Reproduced by kind permission of the Internet Society.
">Leadership: "Women who rule the web: kc claffy" (British Council)
</a>
      </li>

      <li class="item mb-1 inthenews">
        <a href="https://www.infosecurity.us/blog/2019/1/2/open-source-software-targets-bgp-hijack-exploits" title="Via Jeff Stone writing at Cyberscoop, comes this fascinating reportage, detailing an open-source based effort targeting BGP hijack exploits monikered ARTEMIS (Automatic and Real-Time Detection and Mitigation System, ARTEMIS - a research effort of the INSPIRE group, FORTH Greece (www.inspire.edu.gr) and the Center for Applied Internet Data Analysis (CAIDA), University of California San Diego, USA).
">Security: "ARTEMIS: Targets BGP Hijacks" (Infosecurity.US)
</a>
      </li>
</ul>
      </>
    ),
  },
  {
    title: 'Blog',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
<ul class="whatsnew" id="blogfeed">
      <li class="item mb-1"> <a href="https://blog.caida.org/best_available_data/2021/05/19/response-to-nstcs-jcore/">Response to NSTC’s JCORE</a>
</li>
<li class="item mb-1"> <a href="https://blog.caida.org/best_available_data/2021/04/24/guiding-principles-for-a-bureau-of-cyber-statistics/">Guiding principles for a “Bureau of Cyber Statistics”</a>
</li>
<li class="item mb-1"> <a href="https://blog.caida.org/best_available_data/2020/12/15/unintended-consequences-of-submarine-cable-deployment-on-internet-routing/">Unintended consequences of submarine cable deployment on Internet routing</a>
</li>
<li class="item mb-1"> <a href="https://blog.caida.org/best_available_data/2020/10/27/caida-resource-catalog/">CAIDA Resource Catalog</a>
</li>
<li class="item mb-1"> <a href="https://blog.caida.org/best_available_data/2020/10/13/spoofer-surpasses-one-million-sessions-and-publishes-final-report/">Spoofer Surpasses One Million Sessions and Publishes Final Report</a>
</li>
<li class="item mb-1"> <a href="https://blog.caida.org/best_available_data/2020/08/06/ipv4-history-visualization/">IPv4 History Visualization</a>
</li>
</ul>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--6')}>
      {/* <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div> */}
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
