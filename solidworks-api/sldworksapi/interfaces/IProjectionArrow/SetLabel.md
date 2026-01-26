---
type: method
interface: IProjectionArrow
member: SetLabel
returns: System.Boolean
parameters:
  -
    name: Label
    type: System.String
    description: Label for this projection arrow
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related:
  - IProjectionArrow.GetLabel
keywords:
  - setlabel
  - iprojectionarrow
  - projection
  - arrow
  - label
  - string
  - boolean
---

# IProjectionArrow.SetLabel

Sets the label for this view's projection arrow.

## Signature

```csharp
System.Boolean SetLabel( 
   System.String
Label
)
```
## Parameters

- `Label` (System.String): Label for this projection arrow

## Return Value

True if setting the label is successful, false if not

## See Also

- `IProjectionArrow.GetLabel`