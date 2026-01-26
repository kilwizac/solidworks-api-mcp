---
type: property
interface: IDragOperator
member: IsDragByRay
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related: []
keywords:
  - isdragbyray
  - idragoperator
  - drag
  - operator
  - ray
  - boolean
readonly: null
---

# IDragOperator.IsDragByRay

Gets or sets the drag-by-ray setting.

## Signature

```csharp
System.Boolean IsDragByRay {get; set;}
```
## Parameters

None.

## Return Value

True uses drag-by-ray, false uses drag-by-transform (see Remarks )

## Remarks

Drag-by-ray
Tries to find a solution that keeps a specified geometry on, or close to, a ray (defined by a point on the ray and its direction).
Drag-by-transform
Uses a transform matrix, which is any combination of translations and rotations.
NOTE:
IDragOperator does not define the drag ray; it only performs drag-by-transform. If this property is set to True, the user-interface component move honors this setting. The default mode for the user interface is drag-by-transform.