---
type: method
interface: ICenterMark
member: Select
returns: System.Boolean
parameters:
  -
    name: Append
    type: System.Boolean
    description: True appends the center mark to the selection list, false replaces the selection list with this center mark
  -
    name: Data
    type: System.Object
    description: SelectData object
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - selections
related: []
keywords:
  - select
  - icentermark
  - center
  - mark
  - append
  - boolean
  - data
  - object
---

# ICenterMark.Select

Selects the center mark.

## Signature

```csharp
System.Boolean Select( 
   System.Boolean
Append
,
   System.Object
Data
)
```
## Parameters

- `Append` (System.Boolean): True appends the center mark to the selection list, false replaces the selection list with this center mark
- `Data` (System.Object): SelectData object

## Return Value

True if the center mark is selected, false if not