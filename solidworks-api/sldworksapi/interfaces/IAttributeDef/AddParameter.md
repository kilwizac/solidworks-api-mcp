---
type: method
interface: IAttributeDef
member: AddParameter
returns: System.Boolean
parameters:
  -
    name: NameIn
    type: System.String
    description: Name to be given to the parameter (see Remarks )
  -
    name: Type
    type: System.Int32
    description: Parameter type as defined in swParamType_e
  -
    name: DefaultValue
    type: System.Double
    description: Default value (see Remarks )
  -
    name: Options
    type: System.Int32
    description: Not used
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IAttributeDef.Register
  - ISldWorks.DefineAttribute
keywords:
  - addparameter
  - iattributedef
  - attribute
  - def
  - add
  - parameter
  - name
  - string
  - type
  - int32
  - default
  - value
  - double
  - options
  - boolean
  - create
  - vba
  - feature
  - include
  - library
  - vb
  - net
  - find
---

# IAttributeDef.AddParameter

Adds a parameter to the attribute definition using the specified name and default value.

## Signature

```csharp
System.Boolean AddParameter( 
   System.String
NameIn
,
   System.Int32
Type
,
   System.Double
DefaultValue
,
   System.Int32
Options
)
```
## Parameters

- `NameIn` (System.String): Name to be given to the parameter (see Remarks )
- `Type` (System.Int32): Parameter type as defined in swParamType_e
- `DefaultValue` (System.Double): Default value (see Remarks )
- `Options` (System.Int32): Not used

## Return Value

True if the parameter is added successfully, false if not

## Remarks

Parameters cannot be added after the attribute definition is registered.
The name of the parameter given by NameIn must be unique in the attribute definition.
For parameters of type swParamTypeDouble, the DefaultValue argument allows a default value to be placed in the attribute definition parameter. This value is assigned to the parameters of newly created attribute instances.
NOTE:
There is no way to get or set integer parameters in attributes. Instead, use
IParameter::GetDoubleValue
and
IParameter::SetDoubleValue2
to get and set values for integer parameters. If you need to store a negative value, define your attribute parameter as type double. SOLIDWORKS does not allow negative integer values.

## Examples

- Create Attribute (VBA) (Create_Attribute_Example_VB.htm)
- Add Attribute to Feature and Include in Library Feature (VB.NET) (Add_Attribute_to_Feature_and_Include_in_Library_Feature_Example_VBNET.htm)
- Add Attribute to Feature and Include in Library Feature (C#) (Add_Attribute_to_Feature_and_Include_in_Library_Feature_Example_CSharp.htm)
- Add Attribute to Feature and Include in Library Feature (VBA) (Add_Attribute_to_Feature_and_Include_In_Library_Feature_Example_VB.htm)
- Find Attribute (C#) (Find_Attribute_Example_CSharp.htm)
- Find Attribute (VB.NET) (Find_Attribute_Example_VBNET.htm)
- Find Attribute (VBA) (Find_Attribute_Example_VB.htm)

## See Also

- `IAttributeDef.Register`
- `ISldWorks.DefineAttribute`