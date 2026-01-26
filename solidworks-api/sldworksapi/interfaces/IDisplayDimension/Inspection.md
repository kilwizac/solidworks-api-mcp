---
type: property
interface: IDisplayDimension
member: Inspection
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IDisplayDimension.GetText
  - IDisplayDimension.LowerInspection
  - IDisplayDimension.SetText
keywords:
  - display
  - dimensions
  - see
  - also
  - idisplaydimension
  - inspection
  - dimension
  - boolean
readonly: null
---

# IDisplayDimension.Inspection

Gets or sets whether a display dimension above the dimension line is displayed as an inspection dimension.

## Signature

```csharp
System.Boolean Inspection {get; set;}
```
## Parameters

None.

## Return Value

True if the display dimension above the dimension line is displayed as an inspection dimension, false if not

## Remarks

An inspection dimension is contained within an oval.

## See Also

- `IDisplayDimension.GetText`
- `IDisplayDimension.LowerInspection`
- `IDisplayDimension.SetText`