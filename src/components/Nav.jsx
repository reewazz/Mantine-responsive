import { Avatar, Tabs, Text } from "@mantine/core";
import { useState } from "react";

export const Nav = () => {
  const [activeTab, setActiveTab] = useState("first");

  return (
    <>
      <div className="profile w-full py-4 flex gap-6 bg-violet-800 text-white">
        <Avatar
          src="https://byuc.wordpress.com/wp-content/uploads/2012/07/avat-2.jpg"
          alt="it's me"
        />
        <div className="texts">
          <Text>Riwaj Neupane</Text>
          <Text>Junior Intern</Text>
        </div>
      </div>

      <Tabs defaultValue="first">
        <div className="tabs bg-violet-800">
          <Tabs.List>
            <Tabs.Tab
              value="first"
              onClick={() => setActiveTab("first")}
              className={`text-sm px-6 py-2 rounded-full ml-2 ${
                activeTab === "coverLetter"
                  ? "bg-white text-blue-700"
                  : "text-white hover:bg-white hover:text-blue-700"
              }`}
            >
              Resume
            </Tabs.Tab>
            <Tabs.Tab
              onClick={() => setActiveTab("second")}
              className={`text-sm px-6 py-2 rounded-full ${
                activeTab === "resume"
                  ? "bg-white text-blue-700"
                  : "text-white hover:bg-white hover:text-blue-700"
              }`}
              variant="filled"
              value="second"
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
            alt="Software Engineer CV"
          />
        </Tabs.Panel>
      </Tabs>
    </>
  );
};
