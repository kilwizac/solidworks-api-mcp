---
type: property
interface: IModelDocExtension
member: AnnotationViewCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - dimensions
  - ui
related:
  - IModelDocExtension.AnnotationViews
  - IModelDocExtension.IGetAnnotationViews
keywords:
  - annotation
  - see
  - also
  - iannotation
  - views
  - view
  - iview
  - annotations
  - annotationviewcount
  - imodeldocextension
  - model
  - doc
  - extension
  - count
  - int32
  - move
  - notes
  - area
  - vb
  - net
  - vba
readonly: true
---

# IModelDocExtension.AnnotationViewCount

Gets the number of annotation views in this part or assembly document.

## Signature

```csharp
System.Int32 AnnotationViewCount {get;}
```
## Parameters

None.

## Return Value

Number of annotation views in this model document

## Remarks

Call this method before calling
IModelDocExtension::IGetAnnotationViews
to get the size of the array for that method.

## Examples

- Move Annotations to Notes Area Annotation View (C#) (Move_Annotations_to_First_Annotation_View_Example_CSharp.htm)
- Move Annotations to Notes Area Annotation View (VB.NET) (Move_Annotations_to_First_Annotation_View_Example_VBNET.htm)
- Move Annotations to Notes Area Annotation View (VBA) (Move_Annotations_to_First_Annotation_View_Example_VB.htm)

## See Also

- `IModelDocExtension.AnnotationViews`
- `IModelDocExtension.IGetAnnotationViews`