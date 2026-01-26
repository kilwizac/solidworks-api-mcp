---
type: method
interface: ICustomPropertyManager
member: Get2
returns: void
parameters:
  -
    name: FieldName
    type: System.String
    description: Name of the custom property
  -
    name: ValOut
    type: System.String
    description: Value of the custom property
  -
    name: ReesolvedValOut
    type: System.String
    description: Evaluated value of the custom property
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - documents
related:
  - ICustomPropertyManager.GetAll
  - ICustomPropertyManager.IGetAll
  - ICustomPropertyManager.Set
keywords:
  - get2
  - icustompropertymanager
  - custom
  - manager
  - field
  - name
  - string
  - val
  - out
  - reesolved
  - void
  - properties
  - configuration
  - vba
  - cut
  - list
  - item
  - solid
  - bodies
  - folders
  - vb
  - net
---

# ICustomPropertyManager.Get2

Obsolete. Superseded by ICustomPropertyManager::Get3.

## Signature

```csharp
void Get2( 
   System.String
FieldName
,
   out System.String
ValOut
,
   out System.String
ReesolvedValOut
)
```
## Parameters

- `FieldName` (System.String): Name of the custom property
- `ValOut` (System.String): Value of the custom property
- `ReesolvedValOut` (System.String): Evaluated value of the custom property

## Return Value

Unknown.

## Examples

- Get Custom Properties for Configuration (VBA) (Get_Custom_Properties_for_Configuration_Example_VB.htm)
- Get Custom Properties for Cut-list Item (VBA) (Get_Custom_Properties_for_Cut-list_Item_Example_VB.htm)
- Get Solid Bodies from Cut-list Folders and Get Custom Properties (C#) (Get_Solid_Bodies_from_Cut-list_Folders_and_Get_Custom_Properties_Example_CSharp.htm)
- Get Solid Bodies from Cut-list Folders and Get Custom Properties (VB.NET) (Get_Solid_Bodies_from_Cut-list_Folders_and_Get_Custom_Properties_Example_VBNET.htm)
- Get Solid Bodies from Cut-list Folders and Get Custom Properties (VBA) (Get_Solid_Bodies_from_Cut-list_Folders_and_Get_Custom_Properties_Example_VB.htm)

## See Also

- `ICustomPropertyManager.GetAll`
- `ICustomPropertyManager.IGetAll`
- `ICustomPropertyManager.Set`