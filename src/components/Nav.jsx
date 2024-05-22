import { Avatar, Tabs, Text } from "@mantine/core";
import { useState } from "react";

export const Nav = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [activeTab, setActiveTab] = useState("first");

  return (
    <>
      <div className="profile w-full px-8 py-6 flex gap-6 items-center  bg-[#395389] text-white">
        <Avatar
          size="xl"
          src="https://byuc.wordpress.com/wp-content/uploads/2012/07/avat-2.jpg"
          alt="it's me"
        />
        <div className="texts font-serif">
          <Text>Riwaj Neupane</Text>
          <Text>Junior Intern</Text>
        </div>
      </div>

      <Tabs
        value={activeTab}
        onChange={setActiveTab}
        defaultValue="first"
        variant="unstyled"
      >
        <div className="tabs bg-[#395389] text-white font-bold px-6">
          <Tabs.List>
            <Tabs.Tab
              value="first"
              styles={{
                tab: {
                  backgroundColor: activeTab === "first" && "white",
                  color: activeTab === "first" && "#395389",
                  borderTopRightRadius: "10px",
                  borderTopLeftRadius: "10px",
                },
              }}
            >
              <div className={` `}>Resume</div>
            </Tabs.Tab>
            <Tabs.Tab
              value="second"
              styles={{
                tab: {
                  backgroundColor: activeTab === "second" && "white",
                  color: activeTab === "second" && "#395389",
                  borderTopRightRadius: "10px",
                  borderTopLeftRadius: "10px",
                },
              }}
            >
              Cover
            </Tabs.Tab>
          </Tabs.List>
        </div>

        <Tabs.Panel value="first" pt="xs">
          <img
            className="w-full h-auto"
            src="https://resumaker.ai/s3/en-US/cv-examples/Software-Engineer-CV-Example.png"
            alt="Software Engineer CV"
          />
        </Tabs.Panel>

        <Tabs.Panel value="second" pt="xs">
          <img
            className="w-full h-auto"
            src="https://blog-cdn.novoresume.com/articles/how-to-write-a-cover-letter-guide/Receptionist-Cover-Letter-Example.webp"
            alt="Cover Letter Example"
          />
        </Tabs.Panel>
      </Tabs>
    </>
  );
};
