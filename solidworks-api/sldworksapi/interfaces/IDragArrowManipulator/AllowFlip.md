---
type: property
interface: IDragArrowManipulator
member: AllowFlip
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - allowflip
  - idragarrowmanipulator
  - drag
  - arrow
  - manipulator
  - allow
  - flip
  - boolean
readonly: null
---

# IDragArrowManipulator.AllowFlip

Gets or sets whether the unidirectional handle can change direction when dragged past length = 0.

## Signature

```csharp
System.Boolean AllowFlip {get; set;}
```
## Parameters

None.

## Return Value

True to allow the unidirectional handle to change direction when dragged past length = 0, false to not (see Remarks )

## Remarks

This property is valid only if
IDragArrowManipulator::ShowOppositeDirection
is false.

## Examples

- IDragArrowManipulator (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IDragArrowManipulator)