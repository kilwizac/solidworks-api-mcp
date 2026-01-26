---
type: method
interface: IDragArrowManipulator
member: Update
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
  - update
  - idragarrowmanipulator
  - drag
  - arrow
  - manipulator
  - boolean
---

# IDragArrowManipulator.Update

Displays a handle after having modified the length of the handle.

## Signature

```csharp
System.Boolean Update()
```
## Parameters

None.

## Return Value

True if the length of the handle was updated, false if not

## Remarks

To change the length of a handle, use
IDragArrowManipulator::Length
or
IDragArrowManipulator::LengthOppositeDirection
, then use this method to see display the modified handle in the graphics area.

## Examples

- IDragArrowManipulator (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IDragArrowManipulator)

## See Also

- `IDragArrowManipulator.Length`
- `IDragArrowManipulator.LengthOppositeDirection`