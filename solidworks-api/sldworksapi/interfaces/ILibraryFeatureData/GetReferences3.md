---
type: method
interface: ILibraryFeatureData
member: GetReferences3
returns: System.Object
parameters:
  -
    name: Scope
    type: System.Int32
    description: Reference scope as defined in swLibFeatureData_e
  -
    name: RefType
    type: System.Object
    description: Array of reference types as defined by swSelectType_e
  -
    name: RefName
    type: System.Object
    description: Array of reference names
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ILibraryFeatureData.IGetReferences3
  - ILibraryFeatureData.ISetReferences
  - ILibraryFeatureData.SetReferences
keywords:
  - library
  - feature
  - see
  - also
  - ilibraryfeaturedata
  - references
  - dimensions
  - features
  - getreferences3
  - data
  - references3
  - scope
  - int32
  - ref
  - type
  - object
  - name
  - vba
  - vb
  - net
---

# ILibraryFeatureData.GetReferences3

Gets the references with respect to the specified scope.

## Signature

```csharp
System.Object GetReferences3( 
   System.Int32
Scope
,
   out System.Object
RefType
,
   out System.Object
RefName
)
```
## Parameters

- `Scope` (System.Int32): Reference scope as defined in swLibFeatureData_e
- `RefType` (System.Object): Array of reference types as defined by swSelectType_e
- `RefName` (System.Object): Array of reference names

## Return Value

Array of references

## Remarks

See
Accessing Selections that Define Features
for additional details on using this method.

## Examples

- Get Library Feature Data (VBA) (Get_Library_Feature_Data_Example_VB.htm)
- Get Library Feature Data (VB.NET) (Get_Library_Feature_Data_Example_VBNET.htm)
- Get Library Feature Data (C#) (Get_Library_Feature_Data_Example_CSharp.htm)

## See Also

- `ILibraryFeatureData.IGetReferences3`
- `ILibraryFeatureData.ISetReferences`
- `ILibraryFeatureData.SetReferences`