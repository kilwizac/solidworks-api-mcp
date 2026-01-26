---
type: property
interface: ICustomPropertyManager
member: IGetNames
returns: System.String
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of custom properties
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ICustomPropertyManager.GetNames
keywords:
  - igetnames
  - icustompropertymanager
  - custom
  - manager
  - names
  - count
  - int32
  - string
readonly: null
---

# ICustomPropertyManager.IGetNames

Gets the names of the custom properties.

## Signature

```csharp
System.String IGetNames( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of custom properties

## Return Value

in-process, unmanaged C++: Pointer to an array of strings of the names of the custom properties VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
ICustomPropertyManager::Count
before calling this method.

## See Also

- `ICustomPropertyManager.GetNames`