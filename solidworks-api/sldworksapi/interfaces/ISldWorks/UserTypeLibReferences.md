---
type: property
interface: ISldWorks
member: UserTypeLibReferences
returns: System.Object
parameters: []
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
  - ISldWorks.ISetUserTypeLibReferences
  - ISldWorks.RemoveUserTypeLibReferences
keywords:
  - type
  - libraries
  - usertypelibreferences
  - isldworks
  - sld
  - works
  - user
  - lib
  - references
  - object
  - add
  - specified
  - library
  - reference
  - vba
readonly: null
---

# ISldWorks.UserTypeLibReferences

Gets and sets the user-specified type library references.

## Signature

```csharp
System.Object UserTypeLibReferences {get; set;}
```
## Parameters

None.

## Return Value

Array of the user-specified type library references

## Remarks

An add-in can use this property to add
its type library references after the add-in is loaded.
A user-specified type library first appears on the list of available references only after adding it and only after recording a macro.
User-specified type library references are not persistent across SOLIDWORKS Design sessions.
Only macros created after adding a user-specified type library reference can reference that type library.
See
Type Libraries
for details.

## Examples

- Add User-specified Type Library Reference (VBA) (Add_User-specified_Type_Library_Reference_Example_VB.htm)

## See Also

- `ISldWorks.GetUserTypeLibReferenceCount`
- `ISldWorks.IGetUserTypeLibReferences`
- `ISldWorks.ISetUserTypeLibReferences`
- `ISldWorks.RemoveUserTypeLibReferences`