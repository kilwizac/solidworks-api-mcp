---
type: method
interface: ISldWorks
member: NewDocument
returns: System.Object
parameters:
  -
    name: TemplateName
    type: System.String
    description: Fully qualified path and name of the template to use for creating the new document
  -
    name: PaperSize
    type: System.Int32
    description: Size of paper as defined in swDwgPaperSizes_e
  -
    name: Width
    type: System.Double
    description: Width of paper; used only when PaperSize is swDwgPapersUserDefined
  -
    name: Height
    type: System.Double
    description: Height of paper; used only when PaperSize is swDwgPapersUserDefined
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - ISldWorks.GetDocumentTemplate
  - ISldWorks.INewDocument2
keywords:
  - document
  - create
  - new
  - newdocument
  - isldworks
  - sld
  - works
  - template
  - name
  - string
  - paper
  - size
  - int32
  - width
  - double
  - height
  - object
  - combine
  - assembly
  - components
  - part
  - vba
  - dimension
  - edge
  - drawing
  - insert
  - conic
  - curve
  - vb
  - net
  - model
  - annotations
  - process
  - body
  - fill
  - holes
---

# ISldWorks.NewDocument

Creates a new document based on the specified template.

## Signature

```csharp
System.Object NewDocument( 
   System.String
TemplateName
,
   System.Int32
PaperSize
,
   System.Double
Width
,
   System.Double
Height
)
```
## Parameters

- `TemplateName` (System.String): Fully qualified path and name of the template to use for creating the new document
- `PaperSize` (System.Int32): Size of paper as defined in swDwgPaperSizes_e
- `Width` (System.Double): Width of paper; used only when PaperSize is swDwgPapersUserDefined
- `Height` (System.Double): Height of paper; used only when PaperSize is swDwgPapersUserDefined

## Return Value

Newly created document or NULL if the operation fails

## Remarks

To get the default template filename, use
ISldWorks::GetUserPreferenceStringValue
.

## Examples

- Combine Assembly Components Into Part (VBA) (Combine_Assembly_Components_into_Part_Example_VB.htm)
- Dimension Edge in Drawing (VBA) (Dimension_Edge_in_Drawing_Example_VB.htm)
- Insert Conic Curve (C#) (Insert_Conic_Curve_Example_CSharp.htm)
- Insert Conic Curve (VB.NET) (Insert_Conic_Curve_Example_VBNET.htm)
- Insert Conic Curve (VBA) (Insert_Conic_Curve_Example_VB.htm)
- Insert Model Annotations (C#) (Insert_Model_Annotations_Example_CSharp.htm)
- Insert Model Annotations (VB.NET) (Insert_Model_Annotations_Example_VBNET.htm)
- Insert Model Annotations (VBA) (Insert_Model_Annotations_Example_VB.htm)
- Process Body (C#) (Process_Body_Example_CSharp.htm)
- Process Body (VB.NET) (Process_Body_Example_VBNET.htm)
- Process Body (VBA) (Process_Body_Example_VB.htm)
- Fill Holes in Part (C#) (Fill_Holes_in_Part_Example_CSharp.htm)
- Fill Holes in Part (VB.NET) (Fill_Holes_in_Part_Example_VBNET.htm)
- Fill Holes in Part (VBA) (Fill_Holes_in_Part_Example_VB.htm)

## See Also

- `ISldWorks.GetDocumentTemplate`
- `ISldWorks.INewDocument2`