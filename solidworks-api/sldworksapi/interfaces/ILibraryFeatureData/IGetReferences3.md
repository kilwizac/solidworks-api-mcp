---
type: method
interface: ILibraryFeatureData
member: IGetReferences3
returns: System.Object
parameters:
  -
    name: Scope
    type: System.Int32
    description: Reference scope as defined in swLibFeatureData_e
  -
    name: Count
    type: System.Int32
    description: Number of references
  -
    name: RefType
    type: System.Int32
    description: In-process, unmanaged C++: Pointer to an array of type long of reference types as defined by swSelectType_e VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
  -
    name: RefName
    type: System.String
    description: In-process, unmanaged C++: Pointer to an array of reference names VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ILibraryFeatureData.GetReferences3
keywords:
  - library
  - feature
  - see
  - also
  - ilibraryfeaturedata
  - references
  - dimensions
  - features
  - igetreferences3
  - data
  - references3
  - scope
  - int32
  - count
  - ref
  - type
  - name
  - string
  - object
---

# ILibraryFeatureData.IGetReferences3

Gets the references with respect to the specified scope.

## Signature

```csharp
System.Object IGetReferences3( 
   System.Int32
Scope
,
   System.Int32
Count
,
   out System.Int32
RefType
,
   out System.String
RefName
)
```
## Parameters

- `Scope` (System.Int32): Reference scope as defined in swLibFeatureData_e
- `Count` (System.Int32): Number of references
- `RefType` (System.Int32): In-process, unmanaged C++: Pointer to an array of type long of reference types as defined by swSelectType_e VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
- `RefName` (System.String): In-process, unmanaged C++: Pointer to an array of reference names VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

In-process, unmanaged C++: Pointer to an array of references VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Before calling this method, call
ILibraryFeatureData::GetReferencesCount
to determine the size of the array.
See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `ILibraryFeatureData.GetReferences3`