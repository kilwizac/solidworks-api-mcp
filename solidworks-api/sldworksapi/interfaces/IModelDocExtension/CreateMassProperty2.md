---
type: property
interface: IModelDocExtension
member: CreateMassProperty2
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related: []
keywords:
  - mass
  - properties
  - see
  - imassproperty
  - createmassproperty2
  - imodeldocextension
  - model
  - doc
  - extension
  - create
  - property2
  - object
  - override
  - vba
  - vb
  - net
readonly: null
---

# IModelDocExtension.CreateMassProperty2

Creates a mass properties object.

## Signature

```csharp
System.Object CreateMassProperty2()
```
## Parameters

None.

## Return Value

IMassProperty2

## Remarks

If this document is a...
Then this method returns...
Part
A mass properties object with information about one or more bodies. Before calling this method, call
IModelDocExtension::SelectByID2
to pre-select the bodies. You can also specify more bodies after calling this method by setting
IMassProperty2::SelectedItems
.
Assembly
A mass properties object with information about one or more components. Before calling this method, call
IModelDocExtension::SelectByID2
to pre-select the components. You can also specify more components after calling this method by setting
IMassProperty2::SelectedItems
.
Bodies from multibody part components cannot be selected for mass properties calculations.
Model that does not apply (e.g., a part with surface bodies only)
Null or Nothing.

## Examples

- Get and Override Mass Properties (VBA) (Get_Mass_Properties_using_MassProperty_Object_Example_VB.htm)
- Get and Override Mass Properties (VB.NET) (Get_Mass_Properties_Using_IMassProperty_Example_VBNET.htm)
- Get and Override Mass Properties (C#) (Get_Mass_Properties_Using_IMassProperty_Example_CSharp.htm)