---
type: method
interface: IComponent2
member: Select3
returns: System.Boolean
parameters:
  -
    name: Append
    type: System.Boolean
    description: True appends the selection to the selection list, false replaces the selection list
  -
    name: Data
    type: SelectData
    description: Pointer to the ISelectData object
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - assemblies
  - selections
related: []
keywords:
  - select3
  - icomponent2
  - component2
  - append
  - boolean
  - data
  - select
---

# IComponent2.Select3

Obsolete. Superseded by IComponent2::Select4.

## Signature

```csharp
System.Boolean Select3( 
   System.Boolean
Append
,
   SelectData
Data
)
```
## Parameters

- `Append` (System.Boolean): True appends the selection to the selection list, false replaces the selection list
- `Data` (SelectData): Pointer to the ISelectData object

## Return Value

True if the component is selected, false if not