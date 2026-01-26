---
type: method
interface: IAnnotationView
member: GetAnnotations2
returns: System.Object
parameters:
  -
    name: DimXpertOnly
    type: System.Boolean
    description: True to get only DimXpert annotations, false to get all annotations
  -
    name: UnassignedInPlane
    type: System.Boolean
    description: True to get only DimXpert annotations, false to get all annotations
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - documents
  - ui
related:
  - IAnnotationView.AnnotationCount
keywords:
  - getannotations2
  - iannotationview
  - annotation
  - view
  - annotations2
  - dim
  - xpert
  - only
  - boolean
  - unassigned
  - plane
  - object
  - move
  - annotations
  - notes
  - area
  - vb
  - net
  - vba
---

# IAnnotationView.GetAnnotations2

Gets the annotations in this annotation view.

## Signature

```csharp
System.Object GetAnnotations2( 
   System.Boolean
DimXpertOnly
,
   System.Boolean
UnassignedInPlane
)
```
## Parameters

- `DimXpertOnly` (System.Boolean): True to get only DimXpert annotations, false to get all annotations
- `UnassignedInPlane` (System.Boolean): True to get only DimXpert annotations, false to get all annotations

## Return Value

Annotations

## Examples

- Move Annotations to Notes Area Annotation View (C#) (Move_Annotations_to_First_Annotation_View_Example_CSharp.htm)
- Move Annotations to Notes Area Annotation View (VB.NET) (Move_Annotations_to_First_Annotation_View_Example_VBNET.htm)
- Move Annotations to Notes Area Annotation View (VBA) (Move_Annotations_to_First_Annotation_View_Example_VB.htm)

## See Also

- `IAnnotationView.AnnotationCount`