---
type: method
interface: ISldWorks
member: IGetMaterialDatabases
returns: System.String
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of material databases
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - ISldWorks.GetMaterialDatabases
keywords:
  - database
  - materials
  - material
  - igetmaterialdatabases
  - isldworks
  - sld
  - works
  - databases
  - count
  - int32
  - string
---

# ISldWorks.IGetMaterialDatabases

Gets the names of the material databases.

## Signature

```csharp
System.String IGetMaterialDatabases( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of material databases

## Return Value

in-process, unmanaged C++: Pointer to the an array of the names of the material databases VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Before calling this method, call
ISldWorks::GetMaterialDatabaseCount
to get the value for Count.
Material database names must be unique. Do not re-use the name of a material database.

## See Also

- `ISldWorks.GetMaterialDatabases`