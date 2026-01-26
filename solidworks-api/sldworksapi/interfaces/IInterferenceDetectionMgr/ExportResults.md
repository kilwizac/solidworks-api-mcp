---
type: method
interface: IInterferenceDetectionMgr
member: ExportResults
returns: System.Boolean
parameters:
  -
    name: FileName
    type: System.String
    description: Full path name of the file ( *.xlsx or *.csv ) (see Remarks )
  -
    name: IncludeThumbnail
    type: System.Boolean
    description: True to include thumbnail images of interfering components in the Microsoft Excel results, false to not (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - file-io
related: []
keywords:
  - exportresults
  - iinterferencedetectionmgr
  - interference
  - detection
  - mgr
  - export
  - results
  - file
  - name
  - string
  - include
  - thumbnail
  - boolean
  - run
  - vba
  - vb
  - net
---

# IInterferenceDetectionMgr.ExportResults

Saves interference detection results to a file.

## Signature

```csharp
System.Boolean ExportResults( 
   System.String
FileName
,
   System.Boolean
IncludeThumbnail
)
```
## Parameters

- `FileName` (System.String): Full path name of the file ( *.xlsx or *.csv ) (see Remarks )
- `IncludeThumbnail` (System.Boolean): True to include thumbnail images of interfering components in the Microsoft Excel results, false to not (see Remarks )

## Return Value

True if the export is successful, false if not

## Remarks

This method corresponds to the
Save Results
button in the Interference Detection PropertyManager.
Filename is a Microsoft Excel file or a
*.csv
file that contains the information presented in the Results list box of the Interference Detection PropertyManager:
A
B
C
D
E
F
G
Interference ID
Interference Preview
Interference volume (mm^3)
Component 1 name
Component 2 name
Component 1 full reference
Component 2 full reference
IncludeThumbnail is only valid if Filename is a Microsoft Excel file.
If IncludeThumbnail is true, then:
A thumbnail is created in each row of Column B (Interference Preview).
Each thumbnail has:
128X128 pixel resolution
White background
Isometric orientation

## Examples

- Run Interference Detection (VBA) (Run_Interference_Detection_Example_VB.htm)
- Run Interference Detection (VB.NET) (Run_Interference_Detection_Example_VBNET.htm)
- Run Interference Detection (C#) (Run_Interference_Detection_Example_CSharp.htm)