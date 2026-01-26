---
type: method
interface: IParameter
member: SetVector2
returns: System.Boolean
parameters:
  -
    name: X
    type: System.Double
    description: x value to store for the named configuration option
  -
    name: Y
    type: System.Double
    description: y value to store for the named configuration option
  -
    name: Z
    type: System.Double
    description: z value to store for the named configuration option
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
  - IParameter.GetVector
  - IParameter.GetVectorVB
keywords:
  - setvector2
  - iparameter
  - parameter
  - vector2
  - double
  - configuration
  - option
  - int32
  - name
  - string
  - boolean
---

# IParameter.SetVector2

Sets the vector values of a named configuration option parameter.

## Signature

```csharp
System.Boolean SetVector2( 
   System.Double
X
,
   System.Double
Y
,
   System.Double
Z
,
   System.Int32
ConfigurationOption
,
   System.String
ConfigurationName
)
```
## Parameters

- `X` (System.Double): x value to store for the named configuration option
- `Y` (System.Double): y value to store for the named configuration option
- `Z` (System.Double): z value to store for the named configuration option
- `ConfigurationOption` (System.Int32): Configuration option as defined in swInConfigurationOpts_e
- `ConfigurationName` (System.String): Name of the configuration

## Return Value

True if successful, false if not

## Remarks

The ConfigurationName argument is:
Not required if ConfigurationOption is set to swThisConfiguration = 1 or swAllConfiguration = 2.
R
equired if ConfigurationOption is set to swSpecifyConfiguration = 3.
Set the C
onfigurationOption argument to swAllConfiguration = 2 for Drawing Docs as they do not have configurations.

## See Also

- `IParameter.GetVector`
- `IParameter.GetVectorVB`