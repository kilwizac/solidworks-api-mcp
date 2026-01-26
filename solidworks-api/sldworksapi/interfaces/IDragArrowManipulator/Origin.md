---
type: property
interface: IDragArrowManipulator
member: Origin
returns: MathPoint
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - origin
  - idragarrowmanipulator
  - drag
  - arrow
  - manipulator
  - math
  - point
readonly: null
---

# IDragArrowManipulator.Origin

Gets or sets the origin of the handle.

## Signature

```csharp
MathPoint Origin {get; set;}
```
## Parameters

None.

## Return Value

Pointer to IMathPoint object

## Remarks

Before calling this property to change the origin setting, set
IDragArrowManipulator::FixedLength
to true.

## Examples

- IDragArrowManipulator (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IDragArrowManipulator)