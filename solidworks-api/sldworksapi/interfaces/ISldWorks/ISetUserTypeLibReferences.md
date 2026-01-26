---
type: method
interface: ISldWorks
member: ISetUserTypeLibReferences
returns: void
parameters:
  -
    name: NCount
    type: System.Int32
    description: Number of user-specified type library references
  -
    name: BstrTlbRef
    type: System.String
    description: in-process, unmanaged C++: Pointer to an array of strings of the user-specified type library references VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - ISldWorks.GetUserTypeLibReferenceCount
  - ISldWorks.IGetUserTypeLibReferences
  - ISldWorks.IRemoveUserTypeLibReferences
  - ISldWorks.RemoveUserTypeLibReferences
  - ISldWorks.UserTypeLibReferences
keywords:
  - type
  - libraries
  - isetusertypelibreferences
  - isldworks
  - sld
  - works
  - user
  - lib
  - references
  - count
  - int32
  - bstr
  - tlb
  - ref
  - string
  - void
---

# ISldWorks.ISetUserTypeLibReferences

Sets the user-specified type library references.

## Signature

```csharp
void ISetUserTypeLibReferences( 
   System.Int32
NCount
,
   ref System.String
BstrTlbRef
)
```
## Parameters

- `NCount` (System.Int32): Number of user-specified type library references
- `BstrTlbRef` (System.String): in-process, unmanaged C++: Pointer to an array of strings of the user-specified type library references VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

An add-in can use this method to add
its type library references after the add-in is loaded.
A user-specified type library first appears on the list of available references only after adding it and only after recording a macro.
User-specified type library references are not persistent across SOLIDWORKS Design sessions.
Only macros created after adding a user-specified type library reference can reference that type library.
See
Type Libraries
for details.

## See Also

- `ISldWorks.GetUserTypeLibReferenceCount`
- `ISldWorks.IGetUserTypeLibReferences`
- `ISldWorks.IRemoveUserTypeLibReferences`
- `ISldWorks.RemoveUserTypeLibReferences`
- `ISldWorks.UserTypeLibReferences`