---
type: property
interface: IDragArrowManipulator
member: FixedLength
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IDragArrowManipulator.Length
  - IDragArrowManipulator.LengthOppositeDirection
keywords:
  - fixedlength
  - idragarrowmanipulator
  - drag
  - arrow
  - manipulator
  - fixed
  - length
  - boolean
readonly: null
---

# IDragArrowManipulator.FixedLength

Gets or sets whether the origin can be changed.

## Signature

```csharp
System.Boolean FixedLength {get; set;}
```
## Parameters

None.

## Return Value

True to permit changing the origin, false to not

## Remarks

Set this property to true before calling
IDragArrowManipulator::Origin
to change the origin.

## Examples

- IDragArrowManipulator (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IDragArrowManipulator)

## See Also

- `IDragArrowManipulator.Length`
- `IDragArrowManipulator.LengthOppositeDirection`