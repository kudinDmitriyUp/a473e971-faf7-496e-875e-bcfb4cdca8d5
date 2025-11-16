"use client"

import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import { Heart, Lightbulb, Mail, Megaphone, MessageSquare, Smartphone, Star, Target, Trophy, Users, Zap } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="large"
      sizing="large"
      background="aurora"
      cardStyle="glass-flat"
      primaryButtonStyle="flat"
      secondaryButtonStyle="layered"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="WheelConnect"
          button={{
            text: "Join Community",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardGallery
          title="Empowering Wheelchair Enthusiasts"
          description="Connect with a vibrant community of wheelchair users who share your passion for independence, sports, technology, and living life to the fullest."
          tag="Welcome"
          tagIcon={Users}
          buttons={[
            {
              text: "Join Community",
              href: "contact"
            },
            {
              text: "Explore Features",
              href: "features"
            }
          ]}
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ZZe97Tv06RGtie4vGmaUjC38a/uploaded-1763320192046-gdf50mu1.jpg",
              imageAlt: "Wheelchair community members"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ZZe97Tv06RGtie4vGmaUjC38a/uploaded-1763320194641-m421g8ws.jpg",
              imageAlt: "Wheelchair sports"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ZZe97Tv06RGtie4vGmaUjC38a/uploaded-1763320193651-ajg96sao.jpg",
              imageAlt: "Independent wheelchair user"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ZZe97Tv06RGtie4vGmaUjC38a/uploaded-1763320195375-ip1jri2c.jpg",
              imageAlt: "Wheelchair technology"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Building an Inclusive Community"
          description="We believe wheelchair users deserve a platform that celebrates their achievements, shares valuable resources, and connects them with like-minded individuals who understand their journey."
          tag="Our Mission"
          tagIcon={Heart}
          textboxLayout="default"
          imagePosition="right"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ZZe97Tv06RGtie4vGmaUjC38a/uploaded-1763320192897-pogh0s9k.jpg"
          imageAlt="Accessibility tools and wheelchair ramp"
          bulletPoints={[
            {
              title: "Empowerment",
              description: "Showcasing the incredible achievements and capabilities of wheelchair users across all walks of life.",
              icon: Zap
            },
            {
              title: "Community",
              description: "Connecting wheelchair enthusiasts worldwide to share experiences, tips, and support each other.",
              icon: Users
            },
            {
              title: "Innovation",
              description: "Highlighting the latest in wheelchair technology, adaptive equipment, and accessibility solutions.",
              icon: Lightbulb
            },
            {
              title: "Advocacy",
              description: "Promoting awareness and advocating for better accessibility and inclusion in all aspects of society.",
              icon: Megaphone
            }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwo
          title="What Makes Our Community Special"
          description="Discover the features and benefits that make our wheelchair enthusiast community the perfect place to connect, learn, and thrive."
          tag="Features"
          tagIcon={Star}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          features={[
            {
              title: "Independence Focus",
              description: "Resources, tips, and inspiration for living independently and achieving personal goals with confidence.",
              icon: Target,
              button: {
                text: "Learn More",
                href: "about"
              }
            },
            {
              title: "Sports & Recreation",
              description: "Connect with fellow athletes and discover adaptive sports, from wheelchair racing to basketball and beyond.",
              icon: Trophy,
              button: {
                text: "Join Sports",
                href: "contact"
              }
            },
            {
              title: "Technology Updates",
              description: "Stay informed about the latest wheelchair innovations, smart devices, and accessibility technology.",
              icon: Smartphone,
              button: {
                text: "View Tech",
                href: "blog"
              }
            },
            {
              title: "Support Network",
              description: "Build meaningful connections with others who understand your journey and can offer valuable support.",
              icon: Heart,
              button: {
                text: "Connect Now",
                href: "contact"
              }
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Community Members Say"
          description="Hear from wheelchair enthusiasts who have found support, friendship, and inspiration in our community."
          tag="Testimonials"
          tagIcon={MessageSquare}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Paralympic Athlete",
              company: "Team USA",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ZZe97Tv06RGtie4vGmaUjC38a/uploaded-1763320196919-oieq7ds2.jpg"
            },
            {
              id: "2",
              name: "Mike Rodriguez",
              role: "Wheelchair Racer",
              company: "Racing Club",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ZZe97Tv06RGtie4vGmaUjC38a/uploaded-1763320197630-rh2y3gm3.jpg"
            },
            {
              id: "3",
              name: "Emma Chen",
              role: "Student",
              company: "University Graduate",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ZZe97Tv06RGtie4vGmaUjC38a/uploaded-1763320198425-jckw9iwe.jpg"
            },
            {
              id: "4",
              name: "David Williams",
              role: "Business Owner",
              company: "Tech Entrepreneur",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ZZe97Tv06RGtie4vGmaUjC38a/uploaded-1763320199166-3vfoputn.jpg"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Get answers to common questions about our wheelchair enthusiast community."
          textPosition="left"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "Who can join the wheelchair community?",
              content: "Our community is open to wheelchair users of all ages, backgrounds, and experience levels. We also welcome family members, caregivers, and allies who support wheelchair accessibility and inclusion."
            },
            {
              id: "2",
              title: "What types of activities do you organize?",
              content: "We organize various activities including adaptive sports events, technology workshops, accessibility advocacy meetings, social gatherings, and educational seminars on independent living."
            },
            {
              id: "3",
              title: "How do I connect with other members?",
              content: "You can connect through our online forums, attend local meetups, join special interest groups, and participate in our virtual events. We have discussion groups for sports, technology, career development, and more."
            },
            {
              id: "4",
              title: "Do you provide resources for new wheelchair users?",
              content: "Yes! We offer comprehensive resources for new wheelchair users including equipment guides, accessibility tips, financial assistance information, and mentorship programs with experienced community members."
            },
            {
              id: "5",
              title: "Is there a membership fee?",
              content: "Basic community membership is free and includes access to our forums and most events. We also offer premium memberships with additional benefits like priority event registration and exclusive workshops."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Join Us"
          tagIcon={Mail}
          title="Ready to Connect with Our Community?"
          description="Join thousands of wheelchair enthusiasts who have found their tribe. Subscribe to our newsletter for the latest updates, events, and inspiring stories from our community."
          inputPlaceholder="Enter your email address"
          buttonText="Join Community"
          termsText="By joining, you agree to receive our community updates and newsletters. You can unsubscribe at any time."
          mediaPosition="right"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ZZe97Tv06RGtie4vGmaUjC38a/uploaded-1763320199910-63sttbbl.jpg"
          imageAlt="Accessible community center"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="WheelConnect"
          columns={[
            {
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Our Mission",
                  href: "about"
                },
                {
                  label: "Community Guidelines",
                  href: "faq"
                }
              ]
            },
            {
              items: [
                {
                  label: "Features",
                  href: "features"
                },
                {
                  label: "Sports Programs",
                  href: "features"
                },
                {
                  label: "Technology Resources",
                  href: "features"
                }
              ]
            },
            {
              items: [
                {
                  label: "Join Community",
                  href: "contact"
                },
                {
                  label: "FAQ",
                  href: "faq"
                },
                {
                  label: "Contact Support",
                  href: "contact"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}