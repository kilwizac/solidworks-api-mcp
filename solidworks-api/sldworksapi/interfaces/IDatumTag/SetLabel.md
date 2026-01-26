---
type: method
interface: IDatumTag
member: SetLabel
returns: System.Boolean
parameters:
  -
    name: Label
    type: System.String
    description: Text string
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IDatumTag.GetLabel
keywords:
  - setlabel
  - idatumtag
  - datum
  - tag
  - label
  - string
  - boolean
---

# IDatumTag.SetLabel

Sets the label for this datum tag.

## Signature

```csharp
System.Boolean SetLabel( 
   System.String
Label
)
```
## Parameters

- `Label` (System.String): Text string

## Return Value

True if the label was successfully set, false if not

## Remarks

The label can consist of up to two characters. If the specified label is more than two characters long, SOLIDWORKS does not change the symbol and returns false.

## See Also

- `IDatumTag.GetLabel`