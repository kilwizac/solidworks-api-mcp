---
type: property
interface: IDragArrowManipulator
member: LengthOppositeDirection
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IDragArrowManipulator.Length
keywords:
  - lengthoppositedirection
  - idragarrowmanipulator
  - drag
  - arrow
  - manipulator
  - length
  - opposite
  - direction
  - double
readonly: null
---

# IDragArrowManipulator.LengthOppositeDirection

Gets or sets the length of the opposite handle.

## Signature

```csharp
System.Double LengthOppositeDirection {get; set;}
```
## Parameters

None.

## Return Value

Length of opposite handle

## Remarks

If you change the length of the handle using this property, then use
IDragArrowMainpulator::Update
to display the modified handle in the graphics area.

## Examples

- IDragArrowManipulator (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IDragArrowManipulator)

## See Also

- `IDragArrowManipulator.Length`