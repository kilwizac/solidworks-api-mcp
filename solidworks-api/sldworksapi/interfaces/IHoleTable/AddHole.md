---
type: method
interface: IHoleTable
member: AddHole
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related: []
keywords:
  - addhole
  - iholetable
  - hole
  - table
  - add
  - int32
---

# IHoleTable.AddHole

Adds holes to this hole table.

## Signature

```csharp
System.Int32 AddHole()
```
## Parameters

None.

## Return Value

Number of holes added to this hole table

## Remarks

You must either interactively or programmatically select the holes to add to the hole table before running this method.
To add holes...
Then...
Interactively
Select an edge that defines a hole to add that hole to this hole table.
Select a face that contains the holes that you want to add to this hole table.
Programatically
Call
IModelDocExtension::SelectByID2
.