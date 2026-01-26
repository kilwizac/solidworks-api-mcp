---
type: method
interface: IDimension
member: ISetUserValueIn3
returns: System.Int32
parameters:
  -
    name: Doc
    type: ModelDoc2
    description: Document whose units you want to use
  -
    name: NewValue
    type: System.Double
    description: Value for this dimension in the units of the document specified by Doc
  -
    name: WhichConfigurations
    type: System.Int32
    description: Configurations to set the value as defined in swSetValueInConfiguration_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - documents
  - ui
related:
  - IDimension.GetSystemValue3
  - IDimension.GetUserValueIn
  - IDimension.GetValue3
  - IDimension.IGetSystemValue3
  - IDimension.IGetUserValueIn2
  - IDimension.ISetSystemValue3
  - IDimension.ISetValue3
  - IDimension.SetSystemValue2
  - IDimension.SetUserValueIn2
  - IDimension.SetValue3
keywords:
  - configuration
  - see
  - also
  - iconfiguration
  - dimensions
  - dimension
  - idimension
  - configurations
  - values
  - isetuservaluein3
  - user
  - value
  - in3
  - doc
  - model
  - doc2
  - new
  - double
  - which
  - int32
---

# IDimension.ISetUserValueIn3

Sets the value of this dimension in the units of the specified document.

## Signature

```csharp
System.Int32 ISetUserValueIn3( 
   ModelDoc2
Doc
,
   System.Double
NewValue
,
   System.Int32
WhichConfigurations
)
```
## Parameters

- `Doc` (ModelDoc2): Document whose units you want to use
- `NewValue` (System.Double): Value for this dimension in the units of the document specified by Doc
- `WhichConfigurations` (System.Int32): Configurations to set the value as defined in swSetValueInConfiguration_e

## Return Value

Success indicator as defined in swSetValueReturnStatus_e

## Remarks

The WhichConfigs argument is equivalent to the
Change Parameter
dialog in the SOLIDWORKS Design user interface, which gives the user the option of having the value set in all configurations or the current configuration. If there is one configuration in the part, SOLIDWORKS ignores this argument.
This method allows you to change the value of a read-only dimension. You can use
IDimension::ReadOnly
to determine if a dimension is read-only.

## See Also

- `IDimension.GetSystemValue3`
- `IDimension.GetUserValueIn`
- `IDimension.GetValue3`
- `IDimension.IGetSystemValue3`
- `IDimension.IGetUserValueIn2`
- `IDimension.ISetSystemValue3`
- `IDimension.ISetValue3`
- `IDimension.SetSystemValue2`
- `IDimension.SetUserValueIn2`
- `IDimension.SetValue3`