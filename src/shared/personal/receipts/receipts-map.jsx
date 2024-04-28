'use client'

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Receipt from "@/entities/personal/receipts/receipt";
import { getReceipts } from "@/services/personal/receipts";

export default function ReceiptsMap() {
    const userJwt = useSelector(state => state.user.userJwt);
    const [receiptsData, setReceiptsData] = useState(null);

    useEffect(() => {
        const fetchReceipts = async () => {
            if (userJwt) {
                const response = await getReceipts(userJwt);
                setReceiptsData(response);
            }
        };

        fetchReceipts();
    }, [userJwt]);

    if (receiptsData && receiptsData.data.length > 0) {
        return receiptsData.data.map(receiptData => {
            return <Receipt key={receiptData.id} receiptData={receiptData} />;
        });
      } 
    else {
        return <div>Нет чеков</div>;
    }
}