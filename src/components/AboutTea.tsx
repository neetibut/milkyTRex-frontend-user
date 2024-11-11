import React from "react";



const AboutTea = () => {
    const AboutTeaStyle = {
        backgroundImage: `url('/src/assets/BgAboutTea.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        padding: '100px',
        color: 'white',
        minHeight: '100vh'
    };


    return (
        <div className="relative">
            {/* Background Image Layer */}
            <div style={AboutTeaStyle} className="absolute inset-0 bg-cover bg-center bg-fixed -z-10" />
            <div className="absolute inset-0 backdrop-blur-sm bg-black/30 z-10" />
            
                <div className="relative z-20 p-24 min-h-screen min-w-screen justify-center text-white">
                    <p>
                    <strong>ชาอบแห้ง</strong> หรือ <strong>ชาอบอากาศ</strong> ไม่ใช่แค่ชาที่ผ่านการแปรรูปเท่านั้น แต่คือเสน่ห์ที่เกิดจากการผสมผสานขั้นตอนพิถีพิถัน ตั้งแต่การเก็บเกี่ยวจนถึงการอบแห้งด้วยเทคโนโลยีล้ำสมัย ทำให้ชานี้เต็มไปด้วยรสชาติที่เป็นเอกลักษณ์และกลิ่นหอมสดใหม่ตลอดอายุการเก็บรักษา
                    </p>
                    <div className="py-6">
                        <p className="font-bold">กระบวนการอบแห้งใบชา: เรื่องราวที่คุณต้องสัมผัสด้วยตัวเอง</p>
                        <ul className="pl-4">
                            <li className="list-disc">การเก็บเกี่ยวอย่างพิถีพิถัน: ใบชาถูกคัดสรรและเก็บอย่างระมัดระวังเพื่อให้ได้ชาที่ดีที่สุด</li>
                            <li className="list-disc">การทำให้ใบชาเหี่ยวลงอย่างเป็นธรรมชาติ: เพื่อเก็บรักษาคุณภาพและรสชาติของชา</li>
                            <li className="list-disc">การอบแห้งด้วยความร้อนควบคุม: ชาของเราผ่านการอบที่ควบคุมอุณหภูมิอย่างเหมาะสมเพื่อรักษากลิ่นและรสชาติได้ยาวนาน</li>
                            <li className="list-disc">การเก็บรักษาในภาชนะพิเศษ: ชาจะถูกเก็บในภาชนะที่ป้องกันการสัมผัสกับอากาศและความชื้น เพื่อให้ได้ชาแห้งที่สดใหม่เสมอ</li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-bold">ทำไมชาอบแห้งของ Tea Blend Cafe จึงพิเศษ</p>
                        <ul className="pl-4">
                            <li className="list-disc">อายุการเก็บรักษาที่ยาวนาน: ดื่มด่ำกับชาแห้งที่ไม่เสื่อมคุณภาพ ทำให้ชงดื่มได้ง่ายทุกเวลา</li>
                            <li className="list-disc">รสชาติและกลิ่นที่คงทน: ทุกครั้งที่เปิดถุงชา คุณจะสัมผัสถึงความหอมและรสชาติที่ยังคงสดใหม่</li>
                            <li className="list-disc">สะดวกและพร้อมชงทันที: ชาอบแห้งของเราชงง่าย ทั้งสำหรับผู้ที่ต้องการสัมผัสรสชาติธรรมชาติหรือเป็นฐานสำหรับชาสูตรต่าง ๆ ของคุณเอง</li>
                        </ul>
                    </div>
                </div>
        </div>
    )
}
export default AboutTea;