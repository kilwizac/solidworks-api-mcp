---
type: method
interface: ICenterMark
member: GetAnnotation
returns: Annotation
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - annotation
  - see
  - also
  - iannotation
  - center
  - marks
  - getannotation
  - icentermark
  - mark
  - object
  - vba
  - vb
  - net
  - select
  - all
---

# ICenterMark.GetAnnotation

Gets the annotation for this center mark.

## Signature

```csharp
Annotation GetAnnotation()
```
## Parameters

None.

## Return Value

Annotation object

## Remarks

This method returns null or nothing for center marks created as features (earlier style of center marks). See
ICenterMark
for details about the old and new style center marks. See SOLIDWORKS Help for details about center marks.
For example, if
ISelectionMgr::GetSelectedObjectType3
equals swSelCENTERMARKS, then ICenterMark::GetAnnotation equals null or nothing. But, if ISelectionMgr::GetSelectedObjectType3 equals swSelCENTERMARKSYMS, then ICenterMark::GetAnnotation points to the IAnnotation object.

## Examples

- Get Annotation Object (VBA) (Get_Annotation_Object_Example_VB.htm)
- Get Annotation Object (VB.NET) (Get_Annotation_Object_Example_VBNET.htm)
- Get Annotation Object (C#) (Get_Annotation_Object_Example_CSharp.htm)
- Select All Center Marks (C#) (Select_All_Center_Marks_Example_CSharp.htm)
- Select All Center Marks (VB.NET) (Select_All_Center_Marks_Example_VBNET.htm)
- Select All Center Marks (VBA) (Select_All_Center_Marks_Example_VB.htm)