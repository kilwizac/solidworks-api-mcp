---
type: method
interface: INote
member: GetAnnotation
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - INote.IGetAnnotation
keywords:
  - annotation
  - see
  - also
  - iannotation
  - notes
  - note
  - inote
  - getannotation
  - object
  - all
  - drawing
  - template
  - vba
  - insert
  - autoballoons
  - bom
  - balloon
  - text
  - vb
  - net
---

# INote.GetAnnotation

Gets the annotation for this specific note.

## Signature

```csharp
System.Object GetAnnotation()
```
## Parameters

None.

## Return Value

Annotation

## Remarks

This method obtains the owning
IAnnotation
object for this
INote
object. The IAnnotation object is a higher-level object that contains methods that are general to all types of annotations.

## Examples

- Get All Notes in Drawing Template (VBA) (Get_All_Notes_in_Drawing_Template_Example_VB.htm)
- Insert Note (VBA) (Insert_a_Note_Example_VB.htm)
- Insert Autoballoons (VBA) (Insert_Autoballoons_Example_VB_AutoBalloon2_VB.htm)
- Set BOM Balloon Text (VBA) (Set_BOM_Balloon_Example_VB.htm)
- Get Annotation Object (VBA) (Get_Annotation_Object_Example_VB.htm)
- Get Annotation Object (VB.NET) (Get_Annotation_Object_Example_VBNET.htm)
- Get Annotation Object (C#) (Get_Annotation_Object_Example_CSharp.htm)

## See Also

- `INote.IGetAnnotation`