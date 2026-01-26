---
type: property
interface: IPartDoc
member: GetPropertyExtension
returns: System.Object
parameters:
  -
    name: ID
    type: System.Int32
    description: (Size of the array returned by IPartDoc::AddPropertyExtension ) - (Position of the property extension in the array) (see Remarks )
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
  - getpropertyextension
  - ipartdoc
  - part
  - doc
  - id
  - int32
  - object
  - add
  - extensions
  - vb
  - net
  - vba
readonly: null
---

# IPartDoc.GetPropertyExtension

Gets the specified property extension on this part document.

## Signature

```csharp
System.Object GetPropertyExtension( 
   System.Int32
ID
)
```
## Parameters

- `ID` (System.Int32): (Size of the array returned by IPartDoc::AddPropertyExtension ) - (Position of the property extension in the array) (see Remarks )

## Return Value

Value of the property extension

## Remarks

IPartDoc::AddPropertyExtension adds property extensions to a last-in-first-out, 1-based array and returns the size of that array. See the examples in
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