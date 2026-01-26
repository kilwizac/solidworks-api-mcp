---
type: method
interface: IDisplayStateSetting
member: IGetEntities
returns: System.Object
parameters:
  -
    name: EntityCount
    type: System.Int32
    description: Number of entities
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IDisplayStateSetting.Entities
  - IDisplayStateSetting.ISetEntities
keywords:
  - igetentities
  - idisplaystatesetting
  - display
  - state
  - setting
  - entities
  - entity
  - count
  - int32
  - object
---

# IDisplayStateSetting.IGetEntities

Gets the entities for this display state setting.

## Signature

```csharp
System.Object IGetEntities( 
   System.Int32
EntityCount
)
```
## Parameters

- `EntityCount` (System.Int32): Number of entities

## Return Value

in-process, unmanaged C++: Pointer to an array entities VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Before calling this method, call
IDisplayStateSetting::GetEntityCount
to populate EntityCount.

## See Also

- `IDisplayStateSetting.Entities`
- `IDisplayStateSetting.ISetEntities`