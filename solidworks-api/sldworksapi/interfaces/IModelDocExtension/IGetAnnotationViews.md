---
type: method
interface: IModelDocExtension
member: IGetAnnotationViews
returns: AnnotationView
parameters:
  -
    name: AnnotationViewCount
    type: System.Int32
    description: Number of annotation views in this part or assembly document
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - dimensions
  - ui
related:
  - IModelDocExtension.AnnotationViews
keywords:
  - annotation
  - see
  - also
  - iannotation
  - views
  - view
  - iview
  - annotations
  - igetannotationviews
  - imodeldocextension
  - model
  - doc
  - extension
  - count
  - int32
---

# IModelDocExtension.IGetAnnotationViews

Gets the annotation views in this part or assembly document.

## Signature

```csharp
AnnotationView IGetAnnotationViews( 
   System.Int32
AnnotationViewCount
)
```
## Parameters

- `AnnotationViewCount` (System.Int32): Number of annotation views in this part or assembly document

## Return Value

in-process, unmanaged C++: Pointer to an array of annotation views VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Before calling this method, call
IModelDocExtension::AnnotationViewCount
to get the value of AnnotationViewCount.

## See Also

- `IModelDocExtension.AnnotationViews`