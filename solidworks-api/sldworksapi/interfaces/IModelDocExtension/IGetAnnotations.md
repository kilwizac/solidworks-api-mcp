---
type: method
interface: IModelDocExtension
member: IGetAnnotations
returns: Annotation
parameters:
  -
    name: NumAnnotations
    type: System.Int32
    description: Number of annotations
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - dimensions
  - ui
related:
  - IModelDocExtension.GetAnnotations
keywords:
  - annotation
  - see
  - also
  - iannotation
  - igetannotations
  - imodeldocextension
  - model
  - doc
  - extension
  - annotations
  - num
  - int32
---

# IModelDocExtension.IGetAnnotations

Gets the annotations on this model.

## Signature

```csharp
Annotation IGetAnnotations( 
   System.Int32
NumAnnotations
)
```
## Parameters

- `NumAnnotations` (System.Int32): Number of annotations

## Return Value

in-process, unmanaged C++: Pointer to an array of annotations VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
IModelDocExtension::GetAnnotationCount
before calling this method.

## See Also

- `IModelDocExtension.GetAnnotations`