import React from 'react'

const Skills = props => {

    return <>
        <p>
            here are some skills I wish to gather at the end of this training.
        </p>
        <table border="1">
            <thead>
                <tr>
                    <th>Skill</th>
                    <th>Intended use</th>
                    <th>Already familiar?</th>
                </tr>

            </thead>
            <tbody>
                <tr>
                    <td>React</td>
                    <td>Frontend stuff</td>
                    <td>Yes</td>
                </tr>
                <tr>
                    <td>ExpressJs</td>
                    <td>Backend related stuff</td>
                    <td>Nope</td>
                </tr>
                <tr>
                    <td>NodeJs</td>
                    <td>Backend backend serverf</td>
                    <td>A bit</td>
                </tr>
            </tbody>
        </table>
    </>
}

export default Skills;