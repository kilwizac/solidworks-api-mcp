---
type: method
interface: IParameter
member: SetStringValue2
returns: System.Boolean
parameters:
  -
    name: StringValue
    type: System.String
    description: Value to store for the named configuration option
  -
    name: ConfigurationOption
    type: System.Int32
    description: Configuration option as defined in swInConfigurationOpts_e
  -
    name: ConfigurationName
    type: System.String
    description: Name of the configuration
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IParameter.GetStringValue
keywords:
  - setstringvalue2
  - iparameter
  - parameter
  - string
  - value2
  - value
  - configuration
  - option
  - int32
  - name
  - boolean
  - create
  - attribute
  - vba
  - delete
  - vb
  - net
---

# IParameter.SetStringValue2

Sets the double or integer value of a named configuration option parameter.

## Signature

```csharp
System.Boolean SetStringValue2( 
   System.String
StringValue
,
   System.Int32
ConfigurationOption
,
   System.String
ConfigurationName
)
```
## Parameters

- `StringValue` (System.String): Value to store for the named configuration option
- `ConfigurationOption` (System.Int32): Configuration option as defined in swInConfigurationOpts_e
- `ConfigurationName` (System.String): Name of the configuration

## Return Value

True if successful, false if not

## Remarks

The ConfigurationName argument is:
Not required if ConfigurationOption is set to swThisConfiguration = 1 or swAllConfiguration = 2.
Required if ConfigurationOption is set to swSpecifyConfiguration =3 .
Set C
onfigurationOption to swAllConfiguration = 2 for drawing documents because they do not have configurations.

## Examples

- Create Attribute (VBA) (Create_Attribute_Example_VB.htm)
- Delete Attribute (C#) (Delete_Attribute_Example_CSharp.htm)
- Delete Attribute (VB.NET) (Delete_Attribute_Example_VBNET.htm)
- Delete Attribute (VBA) (Delete_Attribute_Example_VB.htm)

## See Also

- `IParameter.GetStringValue`