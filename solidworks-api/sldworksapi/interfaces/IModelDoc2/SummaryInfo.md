---
type: property
interface: IModelDoc2
member: SummaryInfo
returns: System.String
parameters:
  -
    name: FieldId
    type: System.Int32
    description: Identifier for field as defined in swSummInfoField_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.FileSummaryInfo
keywords:
  - document
  - summary
  - info
  - files
  - summaryinfo
  - imodeldoc2
  - model
  - doc2
  - field
  - id
  - int32
  - string
  - file
  - information
  - vba
readonly: null
---

# IModelDoc2.SummaryInfo

Gets or sets file summary information for the SOLIDWORKS document.

## Signature

```csharp
System.String SummaryInfo( 
   System.Int32
FieldId
) {get; set;}
```
## Parameters

- `FieldId` (System.Int32): Identifier for field as defined in swSummInfoField_e

## Return Value

Text in field

## Remarks

In line with Microsoft recommendations for OLE support, the file summary information for SOLIDWORKS documents is written as an OLE property set into a stream named "\005Summary Information" off the root storage of the SOLIDWORKS document's compound file.
NOTES:
MFC does not currently provide classes that manage summary information. However, the DRAWCLI application shipped with Visual C++ does include a sample implementation, in the form of the class CSummInfo, which you can use as an example when implementing your own. This class is used by the document class CDrawDoc. DRAWCLI also includes property pages for displaying and modifying Summary Information.
Some dates are localized.
Option Explicit
Sub main()
Dim swApp           As SldWorks.SldWorks
Dim swModel         As SldWorks.ModelDoc2
Dim Text1           As String
Dim Text2           As String
Dim Text3           As String
Dim Text4           As String
Set swApp = CreateObject("SldWorks.Application")
Set swModel = swApp.ActiveDoc
' All of these date strings will be localized according to
' the current regional settings
' These two dates (day, month, and year)
' will be in numeric format and localized
Text1 = swModel.SummaryInfo(swSumInfoCreateDate)
Text2 = swModel.SummaryInfo(swSumInfoSaveDate)
' These two dates will be the same as displayed in the
'
File, Properties
menu in text format
Text3 = swModel.SummaryInfo(swSumInfoCreateDate2)
Text4 = swModel.SummaryInfo(swSumInfoSaveDate2)
Debug.Print "CreateDate = " + Text1
Debug.Print "SaveDate = " + Text2
Debug.Print "CreateDate2 = " + Text3
Debug.Print "SaveDate2 = " + Text4
End Sub

## Examples

- Get File Summary Information (VBA) (Get_File_Summary_Information_Example_VB.htm)

## See Also

- `IModelDoc2.FileSummaryInfo`