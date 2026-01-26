---
type: method
interface: IManipulator
member: Select
returns: System.Boolean
parameters:
  -
    name: Append
    type: System.Boolean
    description: True appends the manipulator tot he selection list, false replaces the selection list with this manipulator
  -
    name: Data
    type: SelectData
    description: ISelectData object
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - selections
related: []
keywords:
  - select
  - imanipulator
  - manipulator
  - append
  - boolean
  - data
---

# IManipulator.Select

Select a manipulator.

## Signature

```csharp
System.Boolean Select( 
   System.Boolean
Append
,
   SelectData
Data
)
```
## Parameters

- `Append` (System.Boolean): True appends the manipulator tot he selection list, false replaces the selection list with this manipulator
- `Data` (SelectData): ISelectData object

## Return Value

True if the manipulator is selected, false if not