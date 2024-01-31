import { issueSchema } from "@/validationSchemas/issueSchema";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client"

export const PATCH = async (req: NextRequest, { params }: { params: { id: string } }) => {
    const body = await req.json();
    const validation = issueSchema.safeParse(body);

    if (!validation.success) {
        return NextResponse.json({ errors: validation.error.format() }, { status: 400 });
    }

    const issue = await prisma.issue.findUnique({
        where: {
            id: Number(params.id)
        }
    })

    if(!issue) {
        return NextResponse.json({ errors: "Issue not found" }, { status: 404 }); 
    }

    const updatedIssue = await prisma.issue.update({
        where: {
            id: Number(params.id)
        },
        data: {
            ...body
        }
    })

    return NextResponse.json(updatedIssue, { status: 200 });
}