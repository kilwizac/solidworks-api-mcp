---
type: method
interface: IHoleTable
member: SetHoleLocationPrecision
returns: System.Boolean
parameters:
  -
    name: UseDoc
    type: System.Boolean
    description: True to set the location for this hole table using the document's precision, false to not
  -
    name: Precision
    type: System.Int32
    description: Precision to use for location values if UseDoc set to false
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related:
  - IHoleTable.GetHoleLocationPrecision
  - IHoleTable.GetHoleLocationUseDocPrecision
keywords:
  - setholelocationprecision
  - iholetable
  - hole
  - table
  - location
  - precision
  - use
  - doc
  - boolean
  - int32
---

# IHoleTable.SetHoleLocationPrecision

Sets the precision to use for location values for this hole table.

## Signature

```csharp
System.Boolean SetHoleLocationPrecision( 
   System.Boolean
UseDoc
,
   System.Int32
Precision
)
```
## Parameters

- `UseDoc` (System.Boolean): True to set the location for this hole table using the document's precision, false to not
- `Precision` (System.Int32): Precision to use for location values if UseDoc set to false

## Return Value

True if precision is set, false if not

## See Also

- `IHoleTable.GetHoleLocationPrecision`
- `IHoleTable.GetHoleLocationUseDocPrecision`