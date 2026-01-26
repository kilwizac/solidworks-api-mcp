---
type: method
interface: ILibraryFeatureData
member: SetReferences
returns: void
parameters:
  -
    name: RefVar
    type: System.Object
    description: Array of references
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ILibraryFeatureData.GetReferences
  - ILibraryFeatureData.GetReferencesCount
  - ILibraryFeatureData.IGetReferences
  - ILibraryFeatureData.ISetReferences
keywords:
  - library
  - feature
  - see
  - also
  - ilibraryfeaturedata
  - references
  - dimensions
  - features
  - setreferences
  - data
  - ref
  - var
  - object
  - void
  - create
  - vb
  - net
  - vba
---

# ILibraryFeatureData.SetReferences

Sets the references for the library feature.

## Signature

```csharp
void SetReferences( 
   System.Object
RefVar
)
```
## Parameters

- `RefVar` (System.Object): Array of references

## Return Value

Unknown.

## Remarks

Some SolidWorks properties and methods, such as this method, have an input object that must be marshaled to an IDispatch object array because System.Object has replaced VARIANT in the .NET framework. When marshaling System.Object to an IDispatch object array, you must explicitly control the marshaling behavior by using the
System.Runtime.InteropServices.DispatchWrapper
class. See the VB.NET and C# examples in this Help topic and
IDispatch Object Arrays as Input in .NET
for more information.
See
Accessing Selections that Define Features
for additional details on using this method.

## Examples

- Create Library Feature With References (C#) (Create_Library_Feature_With_References_Example_CSharp.htm)
- Create Library Feature With References (VB.NET) (Create_Library_Feature_With_References_Example_VBNET.htm)
- Create Library Feature With References (VBA) (Create_Library_Feature_With_References_Example_VB.htm)

## See Also

- `ILibraryFeatureData.GetReferences`
- `ILibraryFeatureData.GetReferencesCount`
- `ILibraryFeatureData.IGetReferences`
- `ILibraryFeatureData.ISetReferences`