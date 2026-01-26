---
type: property
interface: IDragArrowManipulator
member: Length
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IDragArrowManipulator.LengthOppositeDirection
keywords:
  - length
  - idragarrowmanipulator
  - drag
  - arrow
  - manipulator
  - double
readonly: null
---

# IDragArrowManipulator.Length

Gets or sets the length of the handle.

## Signature

```csharp
System.Double Length {get; set;}
```
## Parameters

None.

## Return Value

Length of handle

## Remarks

If you change the length of the handle using this property, then use
IDragArrowMainpulator::Update
to display the modified handle in the graphics area.

## Examples

- IDragArrowManipulator (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IDragArrowManipulator)

## See Also

- `IDragArrowManipulator.LengthOppositeDirection`