---
type: method
interface: IParameter
member: SetDoubleValue2
returns: System.Boolean
parameters:
  -
    name: Value
    type: System.Double
    description: Value to store for the named configuration option
  -
    name: ConfigurationOption
    type: System.Int32
    description: Configuration option as defined in swSetValueInConfiguration_e
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
  - IParameter.GetDoubleValue
keywords:
  - setdoublevalue2
  - iparameter
  - parameter
  - double
  - value2
  - value
  - configuration
  - option
  - int32
  - name
  - string
  - boolean
  - create
  - attribute
  - vba
  - delete
  - vb
  - net
---

# IParameter.SetDoubleValue2

Sets the double or integer value of a named configuration option parameter.

## Signature

```csharp
System.Boolean SetDoubleValue2( 
   System.Double
Value
,
   System.Int32
ConfigurationOption
,
   System.String
ConfigurationName
)
```
## Parameters

- `Value` (System.Double): Value to store for the named configuration option
- `ConfigurationOption` (System.Int32): Configuration option as defined in swSetValueInConfiguration_e
- `ConfigurationName` (System.String): Name of the configuration

## Return Value

True if successful, false if not

## Remarks

The ConfigurationName argument is:
Not required if ConfigurationOption is set to swSetValue_InThisConfiguration = 1 or swSetValue_InAllConfigurations = 2.
Required if ConfigurationOption is set to swSetValue_InSpecificConfigurations = 3.
Set C
onfigurationOption to swSetValue_InAllConfigurations = 2 for drawing documents because they do not have configurations.

## Examples

- Create Attribute (VBA) (Create_Attribute_Example_VB.htm)
- Delete Attribute (C#) (Delete_Attribute_Example_CSharp.htm)
- Delete Attribute (VB.NET) (Delete_Attribute_Example_VBNET.htm)
- Delete Attribute (VBA) (Delete_Attribute_Example_VB.htm)

## See Also

- `IParameter.GetDoubleValue`