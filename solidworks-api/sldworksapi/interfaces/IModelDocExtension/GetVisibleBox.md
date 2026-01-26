---
type: method
interface: IModelDocExtension
member: GetVisibleBox
returns: System.Boolean
parameters:
  -
    name: UpperLeft
    type: MathPoint
    description: Upper-left point of the bounding box
  -
    name: LowerRight
    type: MathPoint
    description: Lower-right point of the bounding box
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IModelDocExtension.RemoveVisibleBox
  - IModelDocExtension.SetVisibleBox
keywords:
  - bounding
  - box
  - parts
  - assemblies
  - see
  - also
  - iassemblydoc
  - ipartdoc
  - getvisiblebox
  - imodeldocextension
  - model
  - doc
  - extension
  - visible
  - upper
  - left
  - math
  - point
  - lower
  - right
  - boolean
---

# IModelDocExtension.GetVisibleBox

Gets the visible bounding box set by IModelDocExtension::SetVisibleBox for a part or an assembly.

## Signature

```csharp
System.Boolean GetVisibleBox( 
   out MathPoint
UpperLeft
,
   out MathPoint
LowerRight
)
```
## Parameters

- `UpperLeft` (MathPoint): Upper-left point of the bounding box
- `LowerRight` (MathPoint): Lower-right point of the bounding box

## Return Value

True if the bounding box was set, false if not

## Remarks

SOLIDWORKS 2007 FCS, Revision Number 15.0

## See Also

- `IModelDocExtension.RemoveVisibleBox`
- `IModelDocExtension.SetVisibleBox`