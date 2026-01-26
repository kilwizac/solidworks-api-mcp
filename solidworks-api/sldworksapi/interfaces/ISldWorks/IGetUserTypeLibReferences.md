---
type: method
interface: ISldWorks
member: IGetUserTypeLibReferences
returns: System.String
parameters:
  -
    name: NCount
    type: System.Int32
    description: Number of user-specified type libraries
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - ISldWorks.IRemoveUserTypeLibReferences
  - ISldWorks.ISetUserTypeLibReferences
  - ISldWorks.RemoveUserTypeLibReferences
  - ISldWorks.UserTypeLibReferences
keywords:
  - type
  - libraries
  - igetusertypelibreferences
  - isldworks
  - sld
  - works
  - user
  - lib
  - references
  - count
  - int32
  - string
---

# ISldWorks.IGetUserTypeLibReferences

Gets the specified user-specified type library references.

## Signature

```csharp
System.String IGetUserTypeLibReferences( 
   System.Int32
NCount
)
```
## Parameters

- `NCount` (System.Int32): Number of user-specified type libraries

## Return Value

in-process, unmanaged C++: Pointer to an array of strings for the user-specified type library references. VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Before calling this method, call
ISldWorks::GetUserTypeLibReferenceCount
to get the value for NCount.
See
Type Libraries
for details.

## See Also

- `ISldWorks.IRemoveUserTypeLibReferences`
- `ISldWorks.ISetUserTypeLibReferences`
- `ISldWorks.RemoveUserTypeLibReferences`
- `ISldWorks.UserTypeLibReferences`