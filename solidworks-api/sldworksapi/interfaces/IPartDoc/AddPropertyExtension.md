---
type: property
interface: IPartDoc
member: AddPropertyExtension
returns: System.Int32
parameters:
  -
    name: PropertyExtension
    type: System.Object
    description: Value of the property extension to add to this part (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - parts
  - ui
related:
  - IPartDoc.ResetPropertyExtension
keywords:
  - extension
  - addpropertyextension
  - ipartdoc
  - part
  - doc
  - add
  - object
  - int32
  - extensions
  - vb
  - net
  - vba
readonly: null
---

# IPartDoc.AddPropertyExtension

Adds a property extension to this part.

## Signature

```csharp
System.Int32 AddPropertyExtension( 
   System.Object
PropertyExtension
)
```
## Parameters

- `PropertyExtension` (System.Object): Value of the property extension to add to this part (see Remarks )

## Return Value

Size of the array to which the property extension value is added

## Remarks

To use this method:
Declare the variable.
Assign the variable a value: float, integer, or string.
Call this method to add the value to the part.
The 1-based array is a first-in-last-out structured list, whose size is used by
IPartDoc::GetPropertyExtension
to access the property extension. See the examples in
Example
.
NOTE
: SOLIDWORKS recommends that you use the
IAttribute
,
IAttributeDef
, and
IParameter
interfaces instead of this method. These interfaces provide more flexibility.

## Examples

- Add and Get Property Extensions (C#) (Add_and_Get_Property_Extension_Example_CSharp.htm)
- Add and Get Property Extensions (VB.NET) (Add_and_Get_Property_Extension_Example_VBNET.htm)
- Add and Get Property Extensions (VBA) (Add_and_Get_Property_Extension_Example_VB.htm)

## See Also

- `IPartDoc.ResetPropertyExtension`